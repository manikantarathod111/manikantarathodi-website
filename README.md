# Manikanta Rathod — Profile Site

A React + Vite "link in bio" style profile page.

## Project structure

```
├── index.html                  Vite entry HTML (loads fonts + mounts React)
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx                React root
    ├── App.jsx                 Top-level layout, wires theme/toast state
    ├── index.css                All styles (design tokens as CSS variables)
    ├── data/
    │   └── profile.js          ← Edit this file to change any text/links/contact info
    ├── hooks/
    │   ├── useTheme.js          Light/dark mode state
    │   └── useToast.js          Toast notification state
    └── components/
        ├── Hero.jsx             Avatar, name, bio, social row, featured banner
        ├── ContactSection.jsx   Phone / WhatsApp / Email / Location cards
        ├── ContactCard.jsx      Card variant: copy-to-clipboard / link / static
        ├── ConnectSection.jsx   Facebook / X / Instagram list
        ├── LinkCard.jsx         Shared link-card used by Connect + More
        ├── MoreSection.jsx      LinkedIn / BJP portal grid
        ├── AppInstall.jsx       "Install app" PWA prompt card
        ├── Footer.jsx           Copy-link button + footer meta
        ├── Toast.jsx            Toast notification UI
        └── Icons.jsx            All inline SVG icons (crisp at any resolution)
```

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Editing content

Everything text-based — name, bio, phone number, email, social links —
lives in `src/data/profile.js`. Change values there; no need to touch
any component.

## Building for production

```bash
npm run build
```

Outputs a static `dist/` folder you can deploy anywhere (Vercel, Netlify,
GitHub Pages, your own server).

## Notes

- Icons are hand-written inline SVG (no icon-font dependency), so they stay
  sharp at any zoom/DPI.
- Light/dark theme follows the system preference on first load and can be
  toggled with the sun/moon button.
- The "Install app" button uses the standard `beforeinstallprompt` PWA event;
  on browsers that don't support it, it shows a toast with manual instructions.
