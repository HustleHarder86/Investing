from __future__ import annotations
import os, datetime, traceback
from typing import List, Optional, Dict, Any

# MCP Python SDK
from mcp.server.fastmcp import FastMCP

# Google APIs
from google.oauth2 import service_account
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

# ----------------------------
# Environment / Config
# ----------------------------
SITE_URL = os.environ.get("GSC_SITE_URL", "").rstrip("/")
CREDS_PATH = os.environ.get("GOOGLE_APPLICATION_CREDENTIALS")
SCOPES = ["https://www.googleapis.com/auth/webmasters.readonly"]

if not CREDS_PATH:
    raise RuntimeError("Set env GOOGLE_APPLICATION_CREDENTIALS to the path of your service account JSON.")
# SITE_URL can be omitted for list_sites; tools that need it will validate.

def _creds():
    return service_account.Credentials.from_service_account_file(CREDS_PATH, scopes=SCOPES)

def _svc_webmasters():
    # Search Console (webmasters v3): sites, sitemaps, searchanalytics
    return build("webmasters", "v3", credentials=_creds(), cache_discovery=False)

def _svc_inspection():
    # URL Inspection (searchconsole v1)
    return build("searchconsole", "v1", credentials=_creds(), cache_discovery=False)

def _need_site_url():
    if not SITE_URL:
        raise RuntimeError("Set env GSC_SITE_URL to your exact property, e.g. https://lifemoney.ca/")

def _err_dict(e: Exception) -> Dict[str, Any]:
    if isinstance(e, HttpError):
        try:
            content = e.content.decode("utf-8", "ignore") if hasattr(e, "content") else ""
        except Exception:
            content = ""
        return {
            "error": "HttpError",
            "status": getattr(e, "status_code", None) or getattr(getattr(e, "resp", None), "status", None),
            "details": str(e),
            "content": content
        }
    return {"error": type(e).__name__, "details": str(e), "trace": traceback.format_exc()}

app = FastMCP("gsc")

# ----------------------------
# Core: Sites
# ----------------------------
@app.tool()
def list_sites() -> Dict[str, Any]:
    """
    List all properties (sites) accessible to this account.
    """
    try:
        svc = _svc_webmasters()
        resp = svc.sites().list().execute()
        return resp or {"siteEntry": []}
    except Exception as e:
        return _err_dict(e)

# ----------------------------
# Core: Search Analytics
# ----------------------------
@app.tool()
def search_analytics(
    start_date: str,
    end_date: str,
    dimensions: Optional[List[str]] = None,
    row_limit: int = 1000,
    start_row: int = 0,
    page: Optional[str] = None,
    country: Optional[str] = None,
    device: Optional[str] = None,
    query: Optional[str] = None,
    query_regex: Optional[str] = None,
    page_regex: Optional[str] = None,
    search_type: Optional[str] = None  # "web" | "image" | "video" | "news"
) -> Dict[str, Any]:
    """
    Run Search Analytics for SITE_URL.
    - dates in YYYY-MM-DD
    - dimensions example: ["query"], ["page"], ["query","page"], ["query","country","device"]
    - filters supported: page, country (e.g. "CAN"), device ("DESKTOP","MOBILE","TABLET"),
      query (exact), regex on query/page
    - paging: start_row, row_limit
    - search_type: "web" (default), "image", "video", "news"
    """
    try:
        _need_site_url()
        if dimensions is None:
            dimensions = ["query"]

        filters = []
        if page:
            filters.append({"dimension": "page", "operator": "equals", "expression": page})
        if country:
            filters.append({"dimension": "country", "operator": "equals", "expression": country})
        if device:
            filters.append({"dimension": "device", "operator": "equals", "expression": device})
        if query:
            filters.append({"dimension": "query", "operator": "equals", "expression": query})
        if query_regex:
            filters.append({"dimension": "query", "operator": "includingRegex", "expression": query_regex})
        if page_regex:
            filters.append({"dimension": "page", "operator": "includingRegex", "expression": page_regex})

        body: Dict[str, Any] = {
            "startDate": start_date,
            "endDate": end_date,
            "dimensions": dimensions,
            "rowLimit": row_limit,
        }
        if start_row:
            body["startRow"] = start_row
        if filters:
            body["dimensionFilterGroups"] = [{"filters": filters}]
        if search_type:
            body["type"] = search_type

        svc = _svc_webmasters()
        resp = svc.searchanalytics().query(siteUrl=SITE_URL, body=body).execute()
        return resp or {"rows": []}
    except Exception as e:
        return _err_dict(e)

# ----------------------------
# Core: URL Inspection
# ----------------------------
@app.tool()
def inspect_url(url: str, language_code: str = "en-US") -> Dict[str, Any]:
    """
    Inspect a URL (must belong to SITE_URL) via URL Inspection API.
    """
    try:
        _need_site_url()
        svc = _svc_inspection()
        body = {"inspectionUrl": url, "siteUrl": SITE_URL, "languageCode": language_code}
        return svc.urlInspection().index().inspect(body=body).execute()
    except Exception as e:
        return _err_dict(e)

@app.tool()
def batch_inspect(urls: List[str], language_code: str = "en-US") -> Dict[str, Any]:
    """
    Inspect multiple URLs (one-by-one). Returns a dict of {url: result or error}.
    Note: API has quotas; large batches may throttle.
    """
    try:
        _need_site_url()
        out = {}
        svc = _svc_inspection()
        for u in urls:
            try:
                body = {"inspectionUrl": u, "siteUrl": SITE_URL, "languageCode": language_code}
                out[u] = svc.urlInspection().index().inspect(body=body).execute()
            except Exception as inner:
                out[u] = _err_dict(inner)
        return {"results": out}
    except Exception as e:
        return _err_dict(e)

# ----------------------------
# Core: Sitemaps
# ----------------------------
@app.tool()
def list_sitemaps() -> Dict[str, Any]:
    """
    List sitemap entries registered for SITE_URL.
    """
    try:
        _need_site_url()
        svc = _svc_webmasters()
        return svc.sitemaps().list(siteUrl=SITE_URL).execute() or {"sitemap": []}
    except Exception as e:
        return _err_dict(e)

@app.tool()
def submit_sitemap(sitemap_url: str) -> Dict[str, Any]:
    """
    Submit a sitemap (e.g. https://lifemoney.ca/sitemap.xml) for SITE_URL.
    """
    try:
        _need_site_url()
        svc = _svc_webmasters()
        svc.sitemaps().submit(siteUrl=SITE_URL, feedpath=sitemap_url).execute()
        return {"status": "submitted", "sitemap_url": sitemap_url}
    except Exception as e:
        return _err_dict(e)

@app.tool()
def delete_sitemap(sitemap_url: str) -> Dict[str, Any]:
    """
    Remove a sitemap registration for SITE_URL (doesn't delete the file on your server).
    """
    try:
        _need_site_url()
        svc = _svc_webmasters()
        svc.sitemaps().delete(siteUrl=SITE_URL, feedpath=sitemap_url).execute()
        return {"status": "deleted", "sitemap_url": sitemap_url}
    except Exception as e:
        return _err_dict(e)

# ----------------------------
# Convenience helpers
# ----------------------------
def _iso(d: datetime.date) -> str:
    return d.strftime("%Y-%m-%d")

@app.tool()
def top_queries(period_days: int = 28, row_limit: int = 50) -> Dict[str, Any]:
    """
    Convenience: last N days, group by query.
    """
    try:
        end = datetime.date.today()
        start = end - datetime.timedelta(days=period_days)
        return search_analytics(_iso(start), _iso(end), dimensions=["query"], row_limit=row_limit)
    except Exception as e:
        return _err_dict(e)

@app.tool()
def top_pages(period_days: int = 28, row_limit: int = 50) -> Dict[str, Any]:
    """
    Convenience: last N days, group by page.
    """
    try:
        end = datetime.date.today()
        start = end - datetime.timedelta(days=period_days)
        return search_analytics(_iso(start), _iso(end), dimensions=["page"], row_limit=row_limit)
    except Exception as e:
        return _err_dict(e)

# ----------------------------
# Run over stdio for Claude Code
# ----------------------------
if __name__ == "__main__":
    app.run()
