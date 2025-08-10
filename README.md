# Yes We Can Technologies

Demo website built with Next.js 14, TypeScript, Tailwind CSS and next-intl.

## Getting Started

```bash
pnpm install
pnpm dev
```

## Production Build

```bash
pnpm build && pnpm start
```

## CI/CD
GitHub Actions run type checks, linting, unit tests, Playwright tests and Lighthouse checks. Provide the following secrets for preview deployments to Vercel:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

Lighthouse budgets are configured in `lighthouserc.json`.

Important contact info is located in `components/footer.tsx`. Update Telegram link in `components/telegram-button.tsx`.
