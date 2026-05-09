# Blog Admin Setup

This portfolio now has:

- `/blog` for live blog posts, YouTube videos, Shorts, and ad slots.
- `/admin` for publishing posts.
- `netlify/functions/create-blog-post.js` for secure server-side publishing.
- `supabase-blog-setup.sql` for the Supabase table and read policy.

## 1. Create Supabase Table

Open Supabase SQL Editor and run:

```sql
-- paste the contents of supabase-blog-setup.sql
```

## 2. Add Netlify Environment Variables

In Netlify, open:

Site settings > Environment variables

Add:

```text
REACT_APP_SUPABASE_URL
REACT_APP_SUPABASE_ANON_KEY
SUPABASE_URL
SUPABASE_SERVICE_ROLE_KEY
ADMIN_PANEL_PASSWORD
REACT_APP_ADSENSE_CLIENT
```

`REACT_APP_ADSENSE_CLIENT` is optional until Google AdSense approves the site.

## 3. Publish

Deploy the site, then open:

```text
/admin
```

Enter the admin password and publish a post. It will appear on `/blog`.

## Earning Notes

Google AdSense approval is not automatic. The site should have original posts, privacy policy, contact information, and regular content before applying.
