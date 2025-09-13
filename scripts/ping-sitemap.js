#!/usr/bin/env node

/**
 * Manual sitemap ping utility
 * Usage: npm run sitemap:ping
 * 
 * This script manually pings search engines to notify them about sitemap updates.
 * Useful for testing or forcing a re-submission of the sitemap.
 */

const pingSearchEngines = async () => {
  const sitemapUrl = 'https://lifemoney.ca/sitemap.xml';
  const timestamp = new Date().toISOString();
  
  console.log('🚀 Manual Sitemap Ping Utility');
  console.log(`📍 Sitemap URL: ${sitemapUrl}`);
  console.log(`⏰ Started at: ${timestamp}\n`);
  
  let successCount = 0;
  let failCount = 0;
  
  // Try Google ping
  console.log('1️⃣  Pinging Google...');
  const googlePingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;
  try {
    const googleResponse = await fetch(googlePingUrl, { 
      method: 'GET',
      signal: AbortSignal.timeout(10000) // 10 second timeout for manual mode
    });
    
    // Google often returns 404 for unauthenticated pings but still processes them
    if (googleResponse.ok || googleResponse.status === 404) {
      console.log(`   ✅ Google ping submitted (status: ${googleResponse.status})`);
      console.log(`   📎 URL: ${googlePingUrl}`);
      successCount++;
    } else {
      console.log(`   ⚠️  Google returned status ${googleResponse.status}`);
      failCount++;
    }
  } catch (error) {
    console.log(`   ❌ Failed to ping Google: ${error.message}`);
    failCount++;
  }
  
  // Try Bing ping
  console.log('\n2️⃣  Pinging Bing...');
  const bingPingUrl = `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;
  try {
    const bingResponse = await fetch(bingPingUrl, {
      method: 'GET',
      signal: AbortSignal.timeout(10000) // 10 second timeout for manual mode
    });
    
    if (bingResponse.ok) {
      console.log(`   ✅ Bing ping successful (status: ${bingResponse.status})`);
      console.log(`   📎 URL: ${bingPingUrl}`);
      successCount++;
    } else {
      console.log(`   ⚠️  Bing returned status ${bingResponse.status}`);
      failCount++;
    }
  } catch (error) {
    console.log(`   ❌ Failed to ping Bing: ${error.message}`);
    failCount++;
  }
  
  // Try Yandex ping (Russian search engine, but accepts international sites)
  console.log('\n3️⃣  Pinging Yandex...');
  const yandexPingUrl = `https://webmaster.yandex.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;
  try {
    const yandexResponse = await fetch(yandexPingUrl, {
      method: 'GET', 
      signal: AbortSignal.timeout(10000)
    });
    
    if (yandexResponse.ok) {
      console.log(`   ✅ Yandex ping successful (status: ${yandexResponse.status})`);
      successCount++;
    } else {
      console.log(`   ⚠️  Yandex returned status ${yandexResponse.status}`);
      failCount++;
    }
  } catch (error) {
    console.log(`   ❌ Failed to ping Yandex: ${error.message}`);
    failCount++;
  }
  
  // IndexNow notification
  const indexNowKey = process.env.INDEXNOW_KEY;
  if (indexNowKey) {
    console.log('\n4️⃣  Sending IndexNow notification...');
    try {
      const indexNowUrl = 'https://api.indexnow.org/indexnow';
      const payload = {
        host: 'lifemoney.ca',
        key: indexNowKey,
        keyLocation: `https://lifemoney.ca/${indexNowKey}.txt`,
        urlList: [sitemapUrl]
      };
      
      const indexNowResponse = await fetch(indexNowUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(10000)
      });
      
      if (indexNowResponse.ok) {
        console.log('   ✅ IndexNow notification sent (instant indexing)');
        successCount++;
      } else {
        console.log(`   ⚠️  IndexNow returned status ${indexNowResponse.status}`);
        failCount++;
      }
    } catch (error) {
      console.log(`   ❌ Failed to notify IndexNow: ${error.message}`);
      failCount++;
    }
  } else {
    console.log('\n4️⃣  IndexNow (skipped - no API key)');
    console.log('   ℹ️  To enable IndexNow:');
    console.log('   1. Generate a key at https://www.bing.com/indexnow');
    console.log('   2. Set INDEXNOW_KEY environment variable');
    console.log('   3. Add the key file to your public directory');
  }
  
  // Summary
  console.log('\n' + '═'.repeat(50));
  console.log('📊 SUMMARY');
  console.log('═'.repeat(50));
  console.log(`✅ Successful pings: ${successCount}`);
  console.log(`❌ Failed pings: ${failCount}`);
  console.log(`⏰ Completed at: ${new Date().toISOString()}`);
  
  // Manual submission URLs
  console.log('\n📌 Manual Submission Links:');
  console.log('Google Search Console: https://search.google.com/search-console');
  console.log('Bing Webmaster Tools: https://www.bing.com/webmasters');
  console.log('Yandex Webmaster: https://webmaster.yandex.com');
  
  process.exit(failCount > 0 ? 1 : 0);
};

// Run the script
pingSearchEngines().catch(error => {
  console.error('❌ Unexpected error:', error);
  process.exit(1);
});