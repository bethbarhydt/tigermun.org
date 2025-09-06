# TigerMUN 2026 – Static Website

This package contains a lightweight, mobile‑friendly website suitable for GoDaddy cPanel or any static host.

## Files
- `index.html` – main page with all sections
- `styles.css` – styles
- `script.js` – small enhancements (mobile menu, countdown, registration link)
- `assets/tigermun_logo.png` – logo (replace as needed)
- `assets/tigermun_2026.ics` – calendar file for the event

## Quick Start (GoDaddy cPanel / File Manager)
1. Log in to GoDaddy › cPanel › **File Manager**.
2. Open the `public_html` folder (or create a subfolder like `tigermun`).
3. Upload the contents of this zip. Ensure `index.html` is at the site root.
4. Visit your domain (e.g., `https://yourdomain.com/` or `https://yourdomain.com/tigermun/`).

## Customize
- **Logo**: Replace `assets/tigermun_logo.png` with your own file, keeping the same name.
- **Registration**: Edit `script.js` and set `REG_FORM_URL` to your Google Form or portal URL.
- **Text**: Open `index.html` and update committee topics, names, contact email, and schedule.
- **Downloads**: Replace `#` links under Resources/Committees with your PDFs.

No build tools are required. This is plain HTML/CSS/JS.
