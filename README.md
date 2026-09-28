# Taste Notes website

The public marketing site for the Taste Notes iPhone app. Plain HTML and CSS with no build step, hosted on Vercel.

## Pages

| File | URL | Purpose |
|---|---|---|
| `index.html` | `/` | Landing page: hero, how it works, features, pricing, coming later, FAQ |
| `privacy.html` | `/privacy` | Privacy Policy (use this URL in App Store Connect) |
| `terms.html` | `/terms` | Terms of Use |
| `support.html` | `/support` | Support page (use this URL in App Store Connect) |

## Everyday edits

- **Launch details** (App Store link, support email, your name, prices): edit `site.config.js`. Nothing else needs to change.
- **Words on the page**: edit the `.html` files directly.
- **Screenshots**: replace files in `assets/screens/` (720 px wide WebP, same file names).
- **Colors and fonts**: `assets/site.css`, top of the file.

Commit and push to `main` and Vercel publishes in about a minute. Push to any other branch to get a preview link first.

## Before launch checklist

- [ ] Set `supportEmail`, `developerName` and `appStoreUrl` in `site.config.js`
- [ ] Have the Privacy Policy and Terms reviewed
- [ ] Connect a custom domain in Vercel (Project → Settings → Domains)
- [ ] Put `https://YOURDOMAIN/privacy` and `https://YOURDOMAIN/support` into App Store Connect

## Preview locally

Open `index.html` in a browser, or run `npx serve .` and visit http://localhost:3000.
