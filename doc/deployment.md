# Deployment Guide

---

## Environment Setup

### Prerequisites

```bash
# Required
Node.js >= 20
PostgreSQL >= 15
npm or yarn or pnpm

# Optional (for local development)
Docker
```

### Environment Variables

Create `.env` file in project root:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/cafe_pos"

# Auth
JWT_SECRET="your-jwt-secret-key"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-nextauth-secret"

# File Upload (optional)
CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"

# Payment Gateway (Phase 2/3)
RAZORPAY_KEY_ID="your-key-id"
RAZORPAY_KEY_SECRET="your-key-secret"

# WhatsApp (Phase 2)
TWILIO_ACCOUNT_SID="your-twilio-sid"
TWILIO_AUTH_TOKEN="your-twilio-token"
TWILIO_WHATSAPP_NUMBER="+14155238886"

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"
NODE_ENV="development"
```

### Local Development Setup

```bash
# 1. Clone repository
git clone <repo-url> project-x
cd project-x

# 2. Install dependencies
npm install

# 3. Copy environment variables
cp .env.example .env
# Edit .env with your database credentials

# 4. Run database migrations
npx prisma migrate dev --name init

# 5. Seed sample data
npx prisma db seed

# 6. Start development server
npm run dev
```

---

## Deployment to Vercel

### 1. Database Setup (Production)

**Option A: Vercel Postgres**
```bash
# In Vercel dashboard, create a Postgres database
# Copy connection string to environment variables
```

**Option B: External Provider** (Railway, Render, AWS RDS)
```bash
# Create PostgreSQL instance
# Update DATABASE_URL in Vercel environment variables
```

### 2. Project Setup

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Link project
vercel link

# Set environment variables
vercel env add DATABASE_URL
vercel env add JWT_SECRET
# ... add all required env vars
```

### 3. Build Configuration

`next.config.ts` — already configured for Vercel deployment.

`vercel.json` (optional — for advanced config):
```json
{
  "buildCommand": "npx prisma generate && npx prisma migrate deploy && next build",
  "installCommand": "npm install",
  "framework": "nextjs"
}
```

### 4. Deploy

```bash
# Deploy to production
vercel --prod

# Or deploy preview
vercel
```

### 5. Post-Deploy

- [ ] Run database migrations: `npx prisma migrate deploy`
- [ ] Create admin user via seed script
- [ ] Configure custom domain
- [ ] Set up SSL (automatic with Vercel)
- [ ] Configure backup schedule

---

## Docker Deployment

### Dockerfile

```dockerfile
FROM node:20-alpine AS base

# Install dependencies
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# Build
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED 1
RUN npx prisma generate
RUN npm run build

# Production runner
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]
```

### docker-compose.yml

```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://user:password@db:5432/cafe_pos
      - JWT_SECRET=your-secret
      - NODE_ENV=production
    depends_on:
      - db
    restart: unless-stopped

  db:
    image: postgres:15-alpine
    volumes:
      - postgres_data:/var/lib/postgresql/data
    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
      - POSTGRES_DB=cafe_pos
    ports:
      - "5432:5432"
    restart: unless-stopped

volumes:
  postgres_data:
```

### Deploy with Docker

```bash
# Build and start
docker-compose up -d --build

# Run migrations
docker-compose exec app npx prisma migrate deploy

# Seed data
docker-compose exec app npx prisma db seed

# View logs
docker-compose logs -f app
```

---

## CI/CD Pipeline (GitHub Actions)

```yaml
# .github/workflows/ci.yml
name: CI/CD
on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run lint

  typecheck:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npx tsc --noEmit

  deploy:
    needs: [lint, typecheck]
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

---

## Production Checklist

### Security
- [ ] JWT_SECRET is a strong, random string
- [ ] All API endpoints require authentication (except login, register, public menu)
- [ ] Rate limiting enabled on auth endpoints
- [ ] Helmet.js for security headers
- [ ] SQL injection protection (via Prisma parameterized queries)
- [ ] File upload validation (type, size)
- [ ] Environment variables not exposed to client (no `NEXT_PUBLIC_` on secrets)

### Performance
- [ ] Database indexes created on foreign keys and frequently queried columns
- [ ] Images served via CDN
- [ ] API responses paginated
- [ ] Static pages cached (ISR for menu pages)
- [ ] Lazy loading for non-critical components

### Monitoring
- [ ] Error tracking (Sentry)
- [ ] Performance monitoring (Vercel Analytics)
- [ ] Database monitoring (pg_stat_statements)
- [ ] Uptime monitoring (Better Uptime / Pingdom)
- [ ] Backup schedule (daily database backup)

### Backup Strategy

```bash
# Daily PostgreSQL backup
pg_dump -Fc cafe_pos > backups/cafe_pos_$(date +%Y%m%d).dump

# Restore
pg_restore -d cafe_pos backups/cafe_pos_20240101.dump
```

---

## Client Onboarding Checklist

- [ ] Domain configured
- [ ] SSL certificate active
- [ ] Admin account created
- [ ] Outlet configured (name, address, GST, timings)
- [ ] Menu items added (categories, products, prices, images)
- [ ] Tax settings configured (GST rates)
- [ ] Printer configured and tested
- [ ] Payment methods set up
- [ ] QR codes generated and printed for tables
- [ ] WhatsApp number configured
- [ ] Staff accounts created with roles
- [ ] Training session completed
