# System Architecture & Tech Stack

## Tech Stack

```
Frontend:    Next.js 15 (App Router) + React 19
Styling:     Tailwind CSS v4
Language:    TypeScript
Backend:     Next.js API Routes (Node.js + Express patterns)
Database:    PostgreSQL (via Prisma ORM)
Auth:        NextAuth.js / JWT
Deployment:  Vercel / Docker
```

## Why Next.js?

- **Full-stack in one project** — frontend + API routes reduce DevOps overhead
- **Server Components** — faster page loads, smaller client bundles
- **API Routes** — built-in backend without separate Express server
- **TypeScript** — type safety across the entire stack
- **Vercel deployment** — zero-config hosting, auto-scaling

## Folder Structure

```
src/
├── app/                     # Next.js App Router pages
│   ├── (auth)/              # Login, register, forgot password
│   │   ├── login/
│   │   └── register/
│   ├── (dashboard)/         # Authenticated routes
│   │   ├── dashboard/       # Main dashboard with analytics
│   │   ├── pos/             # POS / Billing interface
│   │   ├── menu/            # Menu management
│   │   ├── orders/          # Order management
│   │   ├── inventory/       # Inventory & stock
│   │   ├── reports/         # Reports & analytics
│   │   ├── customers/       # CRM & loyalty
│   │   ├── kitchen/         # Kitchen Display System
│   │   ├── qr-menu/         # QR menu management
│   │   ├── outlets/         # Multi-outlet management
│   │   ├── employees/       # Employee management
│   │   └── settings/        # System settings
│   ├── api/                 # REST API routes
│   │   ├── auth/
│   │   ├── orders/
│   │   ├── products/
│   │   ├── categories/
│   │   ├── customers/
│   │   ├── inventory/
│   │   ├── reports/
│   │   ├── payments/
│   │   └── .../
│   └── layout.tsx           # Root layout
├── components/              # Shared React components
│   ├── ui/                  # Base UI primitives (Button, Input, Card, Modal...)
│   ├── layout/              # Sidebar, Navbar, PageWrapper
│   ├── pos/                 # POS-specific components
│   ├── charts/              # Chart components (Recharts)
│   ├── forms/               # Form components
│   └── tables/              # Data table components
├── lib/                     # Utility functions
│   ├── db.ts                # Prisma client
│   ├── auth.ts              # Auth helpers
│   ├── utils.ts             # Shared utilities
│   ├── validations.ts       # Zod schemas
│   └── constants.ts         # App constants
├── data/                    # Static data / seed data
│   ├── categories.ts
│   └── products.ts
├── hooks/                   # Custom React hooks
├── providers/               # React context providers
└── styles/                  # Global styles
    └── globals.css
```

## Data Flow

```
Browser  ──►  Next.js App Router  ──►  Server Components  ──►  Prisma  ──►  PostgreSQL
                    │
                    ├──►  API Routes (REST)  ──►  Prisma  ──►  PostgreSQL
                    │
                    └──►  Client Components  ──►  Server Actions
```

## Security

- **Authentication**: JWT-based with httpOnly cookies
- **Authorization**: Role-based (Admin, Manager, Staff, Kitchen)
- **Input validation**: Zod schemas on all API routes
- **CSRF protection**: Next.js built-in
- **Rate limiting**: On auth and payment endpoints
- **HTTPS**: Enforced in production
