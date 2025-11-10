# Personal Portfolio — Rico Shandika J. A.

A modern, minimal, one-page personal portfolio inspired by ricoagista.github.io. Built from scratch with React + Vite + Tailwind CSS. Fully responsive, card-based layout, and smooth interactions with a 3D Spline hero.

Live preview will be available when running the dev server or deploying to GitHub Pages.

## Features

- One-page layout with sticky navbar and smooth scroll
- Dark neutral palette with cyan accents
- Hero with interactive 3D Spline scene
- About and Services grid (4 cards)
- Resume highlights, Portfolio grid, Testimonials
- Badges/Certificates grid (clickable placeholders)
- Contact modal with Email, WhatsApp, Location, and Socials
- Responsive, accessible, and SEO-friendly basics

## Tech Stack

- React + Vite
- Tailwind CSS
- Lucide React Icons
- Spline (3D scene)

## Getting Started

Prerequisites: Node.js 18+

1. Install dependencies

   npm install

2. Start the development server

   npm run dev

   Open the printed URL (usually http://localhost:3000) to view the site.

3. Build for production

   npm run build

4. Preview the production build locally

   npm run preview

## Project Structure

- src/App.jsx — Main page composition
- src/components/ — Section-based components (Hero, About/Services, Resume/Portfolio/Certs, Footer)
- src/main.jsx — Vite/React entry point
- src/index.css — Tailwind styles and base typography

## Customization

- Update name, subtitle, and profile image in the Hero section
- Replace bio text in About
- Edit Services cards, Resume items, Portfolio projects, and Testimonials
- Update certificate links (currently placeholders)
- Fill in social links and contact details (currently placeholders)

## Accessibility & SEO

- Semantic regions and accessible labels on interactive elements
- Descriptive alt text on images
- Mobile-friendly viewport and responsive layout

## Deploy to GitHub Pages

Option A — Using GitHub Actions (recommended):

1. Install gh-pages (optional if you prefer Actions only)

   npm install --save-dev gh-pages

2. Add these scripts to package.json (if not present):

   {
     "homepage": "https://<your-username>.github.io/<your-repo>",
     "scripts": {
       "deploy": "gh-pages -d dist"
     }
   }

3. Build and deploy

   npm run build
   npm run deploy

Option B — Manual upload to GitHub Pages:

1. Run the build

   npm run build

2. In your repository settings, enable GitHub Pages to serve from the `dist/` folder on a `gh-pages` branch or from `main` (root) if you upload the build output there.

3. Upload the contents of `dist/` to the branch/folder configured in Pages.

Notes for Vite:
- If deploying to a subpath (username.github.io/repo), set `base` in `vite.config.js` or set `homepage` as shown above so asset paths resolve correctly.

## License

This project is provided as-is for personal portfolio use. Replace content with your own details and assets.
