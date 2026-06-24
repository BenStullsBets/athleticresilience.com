# athleticresilience.com

Static marketing site for **Athletic Resilience** — clinician-led sports-medicine education
and coaching for everyday athletes. Built as a fast, dependency-light static site (Eleventy
passthrough), modeled on the structure of `fullkitmarketing.com` and `benbetson.us`.

> **Status:** first-pass clone of the current Kajabi site
> (https://athleticresilience.mykajabi.com), built so the product and messaging can be
> iterated on. Copy is lifted from the current site as a faithful placeholder; branding is
> provisional (see `BRAND.md`).

## Stack

- **Eleventy** (v3) — every page is plain static HTML copied verbatim via passthrough.
  There is no templating to learn; edit the `.html` files directly.
- **Self-hosted fonts** — Inter (display + body) in `fonts/`, so no third-party font requests.
- **No build-time JS framework.** `script.js` is ~100 lines of progressive enhancement
  (mobile nav, scroll-reveal, newsletter form).

## Structure

```
index.html                  Home (hero, pillars, featured course, philosophy, what we believe,
                            store preview, meet the doctors, testimonials, newsletter)
about/index.html            Dr. Lee Schuster & Dr. Greg — founders, mission, philosophy
store/index.html            Four products (courses + 1-on-1 coaching) → current Kajabi store
blog/index.html             Blog index (placeholder + one sample post)
blog/recovery-basics/       Sample post
404.html                    Not-found page
styles.css                  All styles (semantic brand tokens + components)
script.js                   Progressive enhancement
fonts/                      Self-hosted Inter woff2 + fonts.css
favicon.svg
robots.txt, sitemap.xml, site.webmanifest, llms.txt, _headers
BRAND.md                    Brand guide (voice, color, type, logo)
```

## Develop

```bash
npm install
npm run serve     # local dev server with live reload
npm run build     # outputs _site/
```

You can also open `index.html` directly, but use a static server for clean `/about/`-style routes.

## Before going live (TODO)

1. **New product & messaging** — this is a faithful clone of the current Kajabi site; swap in
   the new positioning when ready. All colors are tokens in `styles.css` for easy re-skinning.
2. **Store links** — the Store CTAs point at the current Kajabi store
   (`https://athleticresilience.mykajabi.com/store`). Replace with the new checkout/product
   URLs once the product is finalized.
3. **Newsletter form** — create a free [Web3Forms](https://web3forms.com) access key and
   replace `YOUR_WEB3FORMS_ACCESS_KEY` in `index.html`. Until then the form falls back to email.
4. **Spam protection (optional)** — set a real Cloudflare Turnstile site key in `script.js`.
5. **Raster assets** — add `favicon.png`, `apple-touch-icon.png`, and a 1200×630 `og-image.png`
   (only the SVG favicon ships today), then re-add them to the passthrough list in `.eleventy.js`
   and the icon/OG `<meta>` tags.
6. **Founder photos** — real headshots of Dr. Lee (`images/lee.jpg`) and Dr. Greg
   (`images/greg.jpg`) are in place, pulled from the current Kajabi site and optimized for web.
   Swap for new photography if/when the rebrand calls for it.

## Content source

Copy and positioning are lifted from the current Kajabi site as a starting point. See
`BRAND.md` for the (provisional) brand system.
