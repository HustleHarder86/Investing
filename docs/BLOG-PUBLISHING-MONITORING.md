# Blog Publishing Monitoring & Troubleshooting

## Current Status (September 9, 2025)

### Issue Identified
- GitHub Actions scheduled workflows stopped running after September 5, 2025
- No scheduled runs occurred on Sept 6, 7, 8, or 9
- Manual triggers work fine, only scheduled triggers affected

### Fix Applied
1. **Workflow Reset** - Added comment and re-saved workflow to reset GitHub's scheduling
2. **Dual Schedule** - Added backup schedule at 3 PM EST in addition to 9 AM EST
3. **Enhanced Debugging** - Added detailed logging to track trigger types
4. **Manual Backup** - Created `scripts/check-and-publish.sh` for emergency publishing

## Publishing Schedule

### Automatic Publishing Times
- **Primary**: 9:00 AM EST (14:00 UTC) daily
- **Backup**: 3:00 PM EST (20:00 UTC) daily

### Manual Publishing Options
1. **GitHub Actions Manual Trigger**:
   ```bash
   gh workflow run publish-blog.yml
   ```

2. **Local Script**:
   ```bash
   ./scripts/check-and-publish.sh
   ```

3. **Direct Publishing**:
   ```bash
   npm run blog:publish
   ```

## Monitoring Checklist

### Daily Checks (9:15 AM EST)
- [ ] Check if morning publish ran: `gh run list --workflow=publish-blog.yml --limit=1`
- [ ] Verify blog was published: Check `/blog` page on site
- [ ] Check schedule status: `cat content/blog-schedule.json | grep $(date +%Y-%m-%d)`

### If Auto-Publish Fails
1. **Immediate Action**:
   ```bash
   # Run manual publish
   ./scripts/check-and-publish.sh
   ```

2. **Investigate**:
   ```bash
   # Check workflow runs
   gh run list --workflow=publish-blog.yml --limit=10
   
   # View latest run logs
   gh run view --log
   ```

3. **Force Trigger**:
   ```bash
   # Manually trigger workflow
   gh workflow run publish-blog.yml
   ```

## Troubleshooting

### Common Issues

#### 1. Scheduled Workflow Not Running
**Symptoms**: No runs at 9 AM or 3 PM EST
**Causes**: 
- GitHub Actions service issues
- Repository inactivity (60+ days)
- Workflow file syntax errors

**Solutions**:
1. Edit and re-save workflow file
2. Make a commit to repository
3. Check GitHub Status page
4. Use manual publishing

#### 2. Post Not Publishing
**Symptoms**: Workflow runs but post doesn't appear
**Causes**:
- Missing post file in `/content/scheduled-posts/`
- Incorrect date in schedule
- Post already published

**Solutions**:
1. Check post exists: `ls content/scheduled-posts/`
2. Verify schedule: `npm run blog:validate`
3. Check status: `cat content/blog-schedule.json`

#### 3. Workflow Fails
**Symptoms**: Red X on workflow run
**Causes**:
- npm install issues
- Git push conflicts
- File permission problems

**Solutions**:
1. View logs: `gh run view [RUN_ID] --log`
2. Run locally: `npm run blog:publish`
3. Check git status: `git status`

## Workflow Debugging Output

When a workflow runs, it logs:
- 🕐 Trigger timestamp (local, UTC, Toronto)
- 🔄 Trigger type (schedule vs manual)
- 📌 Run ID and number
- ✅/👤 Whether it's scheduled or manual

Example output:
```
🕐 Workflow triggered at: Tue Sep 9 14:05:47 UTC 2025
📅 UTC time: Tue Sep 9 14:05:47 UTC 2025
🌍 Toronto time: Tue Sep 9 10:05:47 EDT 2025
🔄 Trigger event: schedule
📌 Run ID: 17585265506
📌 Run number: 16
✅ This is a SCHEDULED run
```

## Next Steps

### Tomorrow (September 10, 2025)
- Monitor 9 AM EST run
- Check if "Negotiating Severance in Financial Services" publishes
- If scheduled run works, issue is resolved
- If not, investigate further GitHub Actions issues

### This Week
- Monitor daily runs through Friday
- Document any patterns in failures
- Consider alternative solutions if issues persist

## Alternative Solutions (If Needed)

1. **External Cron Service**: Use service like cron-job.org to trigger workflow
2. **Vercel Cron Jobs**: Set up cron jobs in Vercel to publish
3. **Local Automation**: Run publish script from local machine on schedule
4. **Different CI/CD**: Move to CircleCI, GitLab CI, or other service

## Contact for Issues

If automated publishing fails:
1. Run manual publish immediately
2. Document issue in this file
3. Check GitHub Status: https://www.githubstatus.com/
4. Review logs and troubleshoot

---

Last Updated: September 9, 2025, 10:10 AM EST
Issue Status: Fix applied, monitoring in progress