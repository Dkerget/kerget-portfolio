# Dmitriy Kerget Portfolio Website

Single-page personal portfolio site for Dmitriy Kerget, focused on Azure cloud engineering, infrastructure, and networking work.

## Tech Stack

- HTML5 (`index.html`)
- CSS3 (embedded in `<style>` inside `index.html`)
- Vanilla JavaScript (embedded in `index.html`)
- No external build tools or frameworks

## Project Files

- `index.html`: Main website (layout, styling, and behavior)
- `sitemap.xml`: Search engine sitemap
- `robots.txt`: Crawler rules + sitemap location
- `.gitignore`: Git ignore rules

## Site Sections

- `#hero`
- `#about`
- `#skills`
- `#projects`
- `#contact`

## SEO and Sharing Setup

Configured in the `<head>` of `index.html`:

- Meta description
- Meta keywords
- Meta author
- OpenGraph tags:
  - `og:title`
  - `og:description`
  - `og:type`
  - `og:url`

## Resume Link Standardization

All resume/CV links in `index.html` now point to:

- `https://dkerget.github.io/assets/docs/resume.pdf`

Updated locations:

- Top navigation Resume button
- Hero "Download CV" button
- Contact "Download resume / CV" link

## Completed Today (March 17, 2026)

1. Added SEO meta tags to `index.html` (`description`, `keywords`, `author`).
2. Added OpenGraph tags to improve LinkedIn/social share preview.
3. Created `sitemap.xml` with URLs for:
   - `/`
   - `/#about`
   - `/#skills`
   - `/#projects`
   - `/#contact`
4. Created `robots.txt` with global allow rule and sitemap reference.
5. Replaced outdated resume filename references (`KD_CV_2025.pdf`) with `resume.pdf`.

## Review Notes

- Canonical domain is now standardized to `https://www.kerget.com` across:
  - `robots.txt` sitemap URL
  - `sitemap.xml` `<loc>` entries
  - OpenGraph `og:url`

## Local Preview

Open `index.html` directly in a browser, or serve the folder with any static server.
