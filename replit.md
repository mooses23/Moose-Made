# Workspace

## Overview

pnpm workspace monorepo using TypeScript. This is the Moose Made website — a premium custom packaging fulfillment company website (moose-made.com).

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)
- **Frontend**: React + Vite + Tailwind CSS v4 + Wouter + Framer Motion

## Structure

```text
artifacts-monorepo/
├── artifacts/              # Deployable applications
│   ├── api-server/         # Express API server (backend)
│   └── moose-made/         # Moose Made website (frontend, serves at /)
├── lib/                    # Shared libraries
│   ├── api-spec/           # OpenAPI spec + Orval codegen config
│   ├── api-client-react/   # Generated React Query hooks
│   ├── api-zod/            # Generated Zod schemas from OpenAPI
│   └── db/                 # Drizzle ORM schema + DB connection
├── scripts/                # Utility scripts
├── attached_assets/        # Product photos and logo assets
└── ...
```

## Moose Made Website

**moose-made.com** — Premium custom packaging fulfillment company.

### Pages
- `/` — Homepage (hero, trust bar, value props, 8-step process, AI features, portfolio CTA)
- `/services` — Full service breakdown
- `/how-it-works` — Detailed 8-step process
- `/portfolio` — Portfolio grid with D'Havi Spelt Bagels as featured case study
- `/portfolio/dhavi-spelt-bagels` — Full D'Havi case study with product photos
- `/quote` — 5-step multi-step quote wizard (Contact → Product → Specs → Details → Review)
- `/about` — Company story and values
- `/blog` — Resource hub with seed articles
- `/contact` — Contact form
- `/faq` — FAQ accordion

### Brand Identity
- Moose head logo (attached_assets/F182B37E-7A36-4C46-BA4D-1AC7557158A2_1774933167810.png)
- D'Havi Spelt Bagels product photos used in portfolio (9 photos in attached_assets/)
- Color palette: warm off-white background, deep charcoal foreground, burgundy-red accent
- Typography: Playfair Display (headings) + Inter (body)

### Owner Dashboard (Private CRM)
- `/dashboard` — Leads inbox (redirects to login if not authenticated)
- `/dashboard/login` — Login page (username: moose, password set via DASHBOARD_PASSWORD_HASH secret)
- `/dashboard/:id` — Lead detail view with email/call/WhatsApp actions
- iOS-inspired design: rounded cards, SF Pro font stack, `#F2F2F7` background, soft shadows
- Auth: HMAC token stored in localStorage (`moose_dashboard_token`)
- Read/unread state tracked in localStorage (`moose_read_leads`)

### API Endpoints
- `GET /api/healthz` — Health check
- `POST /api/quotes` — Submit a quote request
- `GET /api/quotes` — List all quote submissions
- `POST /api/contact` — Submit a contact message
- `GET /api/contacts` — List all contact submissions (requires Bearer token)
- `POST /api/dashboard/login` — Dashboard login (returns HMAC token)

### Database Tables
- `quotes` — Quote submissions from the 5-step wizard
- `contacts` — Contact form messages

### AI Features Section
Conceptual UI placeholders for future AI integrations:
1. AI Packaging Intake Assistant
2. AI Dieline Assistant
3. AI Supplier Matching
4. AI Quote Pre-Estimator
5. AI Mockup Preview Generator

## Development Commands

- `pnpm --filter @workspace/moose-made run dev` — Run frontend dev server
- `pnpm --filter @workspace/api-server run dev` — Run API server
- `pnpm --filter @workspace/api-spec run codegen` — Re-run codegen after OpenAPI changes
- `pnpm --filter @workspace/db run push` — Push DB schema changes

## TypeScript & Composite Projects

Every package extends `tsconfig.base.json` which sets `composite: true`. The root `tsconfig.json` lists all lib packages as project references.

- **Always typecheck from the root** — run `pnpm run typecheck`
- **`emitDeclarationOnly`** — only emit `.d.ts` files during typecheck; actual JS bundling is handled by esbuild/vite
- **Project references** — when package A depends on package B, A's `tsconfig.json` must list B in its `references` array

## Packages

### `artifacts/moose-made` (`@workspace/moose-made`)
React + Vite frontend for the Moose Made website. All pages in `src/pages/`, shared layout in `src/components/layout/`.

### `artifacts/api-server` (`@workspace/api-server`)
Express 5 API server. Routes in `src/routes/` — quotes.ts, contact.ts, health.ts.

### `lib/db` (`@workspace/db`)
Database layer. Schema tables: `quotesTable`, `contactsTable`.

### `lib/api-spec` (`@workspace/api-spec`)
OpenAPI 3.1 spec at `openapi.yaml`. Endpoints: healthz, quotes, contact.
Run codegen: `pnpm --filter @workspace/api-spec run codegen`

### `lib/api-zod` (`@workspace/api-zod`)
Generated Zod schemas: `SubmitQuoteBody`, `GetQuotesResponse`, `SubmitContactBody`, `HealthCheckResponse`, `GetContactsResponse`.

### `lib/api-client-react` (`@workspace/api-client-react`)
Generated React Query hooks: `useSubmitQuote`, `useGetQuotes`, `useSubmitContact`, `useHealthCheck`, `useGetContacts`.
Exports `setAuthTokenGetter` for global Bearer token injection.
