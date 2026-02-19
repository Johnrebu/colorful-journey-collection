# SEO Quick Start Checklist

## Before You Deploy

### 🔴 CRITICAL - Do These First

- [ ] Update your domain in all files:
  - [ ] `index.html` - Replace all `https://yourportfolio.com` with your actual domain
  - [ ] `public/robots.txt` - Update sitemap URL
  - [ ] `public/sitemap.xml` - Update all domain URLs
  - [ ] `src/lib/seo.ts` - Update social links and Twitter handle

- [ ] Ensure your profile image is in `public/profile-logo.png`
  - [ ] Image should be at least 1200x630px (for OG images)
  - [ ] Preferably 1200x1200px for square usage

### 🟡 IMPORTANT - High Impact

- [ ] Run Lighthouse audit: F12 → Lighthouse → Generate report
  - [ ] Fix any SEO issues marked as red
  - [ ] Target: 90+ on all metrics

- [ ] Test on mobile: F12 → responsive design mode
  - [ ] All content should be readable
  - [ ] Navigation should work smoothly

- [ ] Add meaningful alt text to all images:
  - [ ] Home.tsx section images
  - [ ] Project showcase images
  - [ ] Any other images on pages

- [ ] Submit to Google Search Console:
  1. Go to https://search.google.com/search-console/
  2. Add your domain
  3. Upload/validate domain ownership
  4. Submit sitemap at `/sitemap.xml`
  5. Request indexing for key pages

- [ ] Submit to Bing Webmaster Tools:
  1. Go to https://www.bing.com/webmaster/
  2. Add your site
  3. Submit sitemap

### 🟢 RECOMMENDED - Boost Rankings Further

- [ ] Enable SSL/HTTPS on your hosting
  - [ ] Test: Visit your site in browser
  - [ ] Should show green lock icon

- [ ] Set up email alerts for Google Search Console
  - [ ] Notifies you of indexing issues
  - [ ] Security alerts

- [ ] Create a robots.txt test in Google Search Console
  - [ ] Validate that robots.txt works as intended
  - [ ] Check crawlability

- [ ] Test social sharing:
  - [ ] Facebook Debugger: https://developers.facebook.com/tools/debug/
  - [ ] Twitter Card Validator: https://cards-dev.twitter.com/validator
  - [ ] LinkedIn: https://linkedin-url-inspector.yext.com/
  - [ ] Copy your site URL and test preview

- [ ] Verify structured data:
  - [ ] Go to https://schema.org/validate/
  - [ ] Enter your site URL or paste HTML
  - [ ] Ensure Person and Website schemas validate

---

## After Deployment - Monitoring

### First Week
- Check Google Search Console daily for crawl errors
- Monitor search impressions in Search Console
- Use Lighthouse to check Core Web Vitals

### First Month
- Watch for indexed pages in Search Console
- Monitor which keywords are getting impressions
- Share projects on LinkedIn, Twitter, GitHub

### Ongoing
- Add new projects to sitemap.xml
- Update lastmod dates in sitemap.xml when you update content
- Monitor top queries and impressions in Search Console
- Keep content fresh and updated

---

## Useful Links

**Tools:**
- Google Search Console: https://search.google.com/search-console/
- Bing Webmaster Tools: https://www.bing.com/webmaster/
- Lighthouse Audit: Built into Chrome DevTools (F12)
- Schema Validator: https://schema.org/validate/
- Mobile Friendly Test: https://search.google.com/test/mobile-friendly/
- PageSpeed Insights: https://pagespeed.web.dev/

**Learning:**
- Google SEO Starter Guide: https://developers.google.com/search/docs/beginner/seo-starter-guide
- Web Vitals Guide: https://web.dev/vitals/
- Schema.org Documentation: https://schema.org/
- Structured Data Testing Tool: https://search.google.com/test/rich-results/

---

## Troubleshooting

**My site isn't showing up in Google?**
- ✓ Can take 2-4 weeks for first indexing
- ✓ Check Google Search Console for errors
- ✓ Ensure robots.txt allows indexing (not blocked)
- ✓ Check for noindex meta tags

**My OG images aren't showing on social?**
- ✓ Image must be 1200x630px minimum
- ✓ Test with Facebook Debugger
- ✓ Wait 24 hours for cache refresh
- ✓ Ensure absolute URLs (not relative)

**Search Console shows crawl errors?**
- ✓ Check robots.txt isn't blocking the path
- ✓ Ensure page returns 200 status code
- ✓ Check for redirect loops
- ✓ Test URL directly in browser

**Lighthouse score is low?**
- ✓ Performance: Optimize images, lazy load, minify CSS/JS
- ✓ SEO: Check for duplicate titles/descriptions
- ✓ Accessibility: Add alt text, proper heading hierarchy
- ✓ Best Practices: Update packages, HTTPS, no console errors

---

**Questions?** Refer to [SEO_IMPLEMENTATION.md](./SEO_IMPLEMENTATION.md) for detailed documentation.
