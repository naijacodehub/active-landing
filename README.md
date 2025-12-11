# Active Landing

This repository contains the frontend for the Active Landing marketing site — a React + TypeScript single-page application built with Create React App and Tailwind CSS.

**Quick overview:**

- Scaffold: Create React App (`react-scripts`)
- Language: TypeScript
- Styling: Tailwind CSS

## Project status

This project is a static marketing site with forms for hiring and outsourcing, team/member pages, and several reusable UI components.

## Tech stack & key dependencies

- React 18
- TypeScript
- Tailwind CSS
- react-router-dom
- react-hook-form + Zod for validations
- Radix UI primitives for a11y-friendly UI

Full dependency list is in `package.json`.

## Scripts (exact)

These come from `package.json` in this repo:

```bash
npm start    # runs react-scripts start (development server)
npm run build  # builds production bundle using react-scripts
npm test     # runs tests (react-scripts test)
npm run eject  # ejects CRA config (irreversible)
```

If you prefer a local preview of the build output you can run:

```bash
npx serve -s build
# or install serve globally: npm install -g serve && serve -s build
```

## Getting started (local)

Prerequisites:

- Node.js >= 18 recommended
- npm (bundled with Node) or `yarn`

Install deps:

```bash
npm install
```

Run dev server:

```bash
npm start
```

Run tests:

```bash
npm test
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npx serve -s build
```

## Project structure

- `src/` — application source
  - `components/` — shared UI components and form components
  - `pages/` — route-level page components
  - `constants/` — site constants and test data
  - `forms/` — form containers for Hire/Outsource flows
  - `layout/` — navbar, footer, layout helpers
- `public/` — static assets and HTML template
- `build/` — production build output (generated)

## Environment variables

Create React App supports `.env` files (prefixed with `REACT_APP_` for usage in the client). Example:

```
REACT_APP_API_URL=https://api.example.com
```

## Linting / Formatting / CI

- This repository doesn't include configured lint or format scripts in `package.json`. Consider adding `eslint`, `prettier`, and related scripts if you need them.

## Deployment

This is a static site after `npm run build`. You can deploy the `build/` output to any static host (Vercel, Netlify, GitHub Pages, S3+CloudFront, Surge).

Example (Netlify):

- Set the build command to `npm run build` and publish directory to `build`.

Example (Vercel):

- Import the repo and set the build command to `npm run build` (Vercel detects CRA automatically in many cases).

## Contributing

1. Fork the repo
2. Create a feature branch
3. Open a pull request with a clear description of changes

## Notes / Next actions I can do for you

- Add exact `preview` script (`serve`) to `package.json`.
- Add `lint` and `format` scripts and basic `.eslintrc` / `.prettierrc`.
- Create a short `CONTRIBUTING.md` with PR checklist.

If you want any of those, tell me which and I'll add them.
