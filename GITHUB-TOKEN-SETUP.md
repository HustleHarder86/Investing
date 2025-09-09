# GitHub Token Setup for Automated Blog Publishing

Since GitHub Actions scheduled workflows are not triggering automatically, we're using Vercel Cron jobs to trigger the workflow via GitHub API. This requires a GitHub Personal Access Token.

## Step 1: Create GitHub Personal Access Token

1. Go to GitHub Settings: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Give it a name: "Blog Publisher Token"
4. Set expiration: 90 days (or "No expiration" if preferred)
5. Select these scopes:
   - ✅ `repo` (Full control of private repositories)
   - ✅ `workflow` (Update GitHub Action workflows)
6. Click "Generate token"
7. **COPY THE TOKEN IMMEDIATELY** (you won't see it again)

## Step 2: Add Token to Vercel Environment Variables

### Option A: Via Vercel Dashboard
1. Go to your Vercel project: https://vercel.com/dashboard
2. Select your "investing" project
3. Go to Settings → Environment Variables
4. Add new variable:
   - Name: `GITHUB_TOKEN`
   - Value: [paste your token]
   - Environment: ✅ Production, ✅ Preview, ✅ Development
5. Click "Save"

### Option B: Via Vercel CLI
```bash
vercel env add GITHUB_TOKEN
# Paste your token when prompted
# Select all environments
```

## Step 3: Add Optional Security Token

For extra security, also add a CRON_SECRET:

1. Generate a random secret:
   ```bash
   openssl rand -hex 32
   ```

2. Add to Vercel:
   - Name: `CRON_SECRET`
   - Value: [your generated secret]
   - Environment: ✅ Production

## Step 4: Verify Setup

### Test the API Endpoint
Visit: https://your-domain.vercel.app/api/test-publish

You should see:
```json
{
  "message": "Test publish triggered",
  "result": {
    "success": true,
    "message": "Blog publisher workflow triggered"
  }
}
```

### Check GitHub Actions
1. Go to: https://github.com/HustleHarder86/Investing/actions
2. You should see a new "Blog Publisher" run triggered by "workflow_dispatch"

## How It Works

1. **Daily at 9 AM EST**: Vercel Cron runs
2. **API Call**: Vercel calls `/api/cron/publish-blog`
3. **GitHub Trigger**: API endpoint triggers GitHub workflow
4. **Blog Published**: Workflow publishes scheduled posts

## Manual Backup Options

If Vercel Cron fails, you can:

1. **Trigger via API**:
   ```bash
   curl https://your-domain.vercel.app/api/test-publish
   ```

2. **Trigger via GitHub CLI**:
   ```bash
   gh workflow run blog-publisher.yml
   ```

3. **Use local script**:
   ```bash
   ./scripts/check-and-publish.sh
   ```

## Monitoring

- **Vercel Logs**: Check Functions tab in Vercel dashboard
- **GitHub Actions**: Check Actions tab in GitHub
- **Blog Schedule**: Review `/blog/calendar` on your site

## Troubleshooting

### Token Not Working
- Ensure token has `repo` and `workflow` scopes
- Check token hasn't expired
- Verify token is in Vercel environment variables

### Cron Not Running
- Check Vercel Functions logs for errors
- Verify `vercel.json` has correct cron configuration
- Ensure project is deployed to Vercel

### Workflow Not Triggering
- Check GitHub Actions is enabled for repository
- Verify workflow file exists and is valid
- Check for GitHub service outages

---

**Note**: Keep your GitHub token secure. Never commit it to the repository or share it publicly.