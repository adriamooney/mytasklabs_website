# AI Automation Consultant — One-Page Site

A one-page professional site built with Next.js, ready to deploy on Vercel.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Calendly

Both “Book a 20-Minute Strategy Call” and “Book a Strategy Call” link to your Calendly URL.

1. Copy `.env.example` to `.env.local`.
2. Set `NEXT_PUBLIC_CALENDLY_URL` to your Calendly booking page (e.g. `https://calendly.com/yourname/strategy-call`).
3. Restart the dev server.

For Vercel, add `NEXT_PUBLIC_CALENDLY_URL` in the project’s Environment Variables.

## Deploy on Vercel

1. Push this repo to GitHub (or connect your Git provider in Vercel).
2. In [Vercel](https://vercel.com), **Add New Project** and import the repo.
3. Leave **Build Command** as `next build` and **Output Directory** as default.
4. Add `NEXT_PUBLIC_CALENDLY_URL` under **Environment Variables**.
5. Deploy.

The site will be built and served as a static page.
