# UI/UX Design Guide

## Brand Identity

### Brand Personality
- **Modern** — Clean, minimal, no clutter
- **Trustworthy** — Professional look suitable for business operations
- **Warm** — Welcoming colors for hospitality context
- **Efficient** — Designed for speed (POS context)

---

## Color Palette

### Primary Colors

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Primary | Orange | `#F97316` | Primary buttons, active states, headers |
| Primary Dark | Deep Orange | `#EA580C` | Hover states, active tabs |
| Primary Light | Light Orange | `#FED7AA` | Backgrounds, badges |

### Neutral Colors

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Background | White | `#FFFFFF` | Page backgrounds |
| Surface | Gray 50 | `#F9FAFB` | Card backgrounds |
| Border | Gray 200 | `#E5E7EB` | Borders, dividers |
| Muted | Gray 500 | `#6B7280` | Secondary text |
| Text | Gray 900 | `#111827` | Primary text |

### Semantic Colors

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Success | Emerald | `#10B981` | Paid, Completed, In stock |
| Warning | Amber | `#F59E0B` | Pending, Low stock |
| Error | Red | `#EF4444` | Void, Overdue, Out of stock |
| Info | Blue | `#3B82F6` | Information badges |

### Dark Mode (KDS & Kitchen)

| Role | Color | Hex |
|------|-------|-----|
| Background | Gray 900 | `#111827` |
| Surface | Gray 800 | `#1F2937` |
| Border | Gray 700 | `#374151` |
| Text | Gray 100 | `#F3F4F6` |

---

## Typography

### Font Stack

```
Primary:    Inter (sans-serif)
Monospace:  JetBrains Mono (for code, bills, KOT)
```

### Font Sizes

| Token | Size | Usage |
|-------|------|-------|
| `text-xs` | 12px | Labels, timestamps |
| `text-sm` | 14px | Helper text, metadata |
| `text-base` | 16px | Body text |
| `text-lg` | 18px | Card titles |
| `text-xl` | 20px | Section headers |
| `text-2xl` | 24px | Page titles |
| `text-3xl` | 30px | Dashboard metrics |
| `text-4xl` | 36px | POS bill amounts |

### Font Weights

| Weight | Usage |
|--------|-------|
| 400 (Regular) | Body text |
| 500 (Medium) | Buttons, inputs |
| 600 (Semibold) | Card titles, section headers |
| 700 (Bold) | Page titles, metrics |

---

## Spacing System

Based on Tailwind's default spacing scale:

| Token | Pixels | Usage |
|-------|--------|-------|
| `p-2` | 8px | Tight card padding |
| `p-4` | 16px | Standard card padding |
| `p-6` | 24px | Section padding |
| `gap-2` | 8px | Tight item grid |
| `gap-4` | 16px | Standard grid gap |
| `gap-6` | 24px | Section spacing |

---

## Layout Framework

### Dashboard Layout
```
┌─────────────────────────────────────────────┐
│  Sidebar (256px)  │  Main Content Area       │
│                   │                          │
│  ┌─────────────┐  │  ┌────────────────────┐  │
│  │ Logo        │  │  │ Top Navbar          │  │
│  ├─────────────┤  │  ├────────────────────┤  │
│  │ Dashboard   │  │  │                    │  │
│  │ POS         │  │  │  Page Content      │  │
│  │ Menu        │  │  │                    │  │
│  │ Orders      │  │  │                    │  │
│  │ Inventory   │  │  │                    │  │
│  │ Reports     │  │  │                    │  │
│  │ Customers   │  │  │                    │  │
│  │ Settings    │  │  │                    │  │
│  └─────────────┘  │  └────────────────────┘  │
└─────────────────────────────────────────────┘
```

### POS Layout (3-column)
```
┌──────────────┬────────────────┬─────────────────┐
│  Left Panel  │  Center Grid   │  Right Panel    │
│  (Categories)│  (Menu Items)  │  (Current Cart) │
│              │                │                 │
│  Tea         │  [Item] [Item] │  Table: 5       │
│  Coffee      │  [Item] [Item] │  Items: 3       │
│  Snacks      │  [Item] [Item] │  Total: ₹450    │
│  Meals       │  [Item] [Item] │                 │
│  Beverages   │  [Item] [Item] │  [Place Order]  │
│  Desserts    │                │                 │
└──────────────┴────────────────┴─────────────────┘
```

### KDS Layout (full-screen)
```
┌─────────────────────────────────────────────────┐
│  Station: Food        [Filters]    [Sound On]   │
├─────────────────────────────────────────────────┤
│  ┌────────────┐  ┌────────────┐  ┌────────────┐ │
│  │ Table 5    │  │ Table 8    │  │ Takeaway 12│ │
│  │ ────────   │  │ ────────   │  │ ────────   │ │
│  │ 2x Tea     │  │ 1x Coffee  │  │ 3x Biryani │ │
│  │ 1x Snacks  │  │ 2x Meals   │  │ 2x Shake   │ │
│  │ ⏱ 5:32    │  │ ⏱ 8:15    │  │ ⏱ 3:10    │ │
│  │ [Ready]    │  │ [Ready]    │  │ [Ready]    │ │
│  └────────────┘  └────────────┘  └────────────┘ │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐ │
│  │ Table 3    │  │ Table 6    │  │ Delivery 7 │ │
│  │ ...        │  │ ...        │  │ ...        │ │
│  └────────────┘  └────────────┘  └────────────┘ │
└─────────────────────────────────────────────────┘
```

---

## Component Design Patterns

### Cards
- White background (`bg-white`)
- Subtle shadow (`shadow-sm`)
- Rounded corners (`rounded-lg`)
- Optional border-left accent for status

### Buttons
| Variant | Style | Usage |
|---------|-------|-------|
| Primary | `bg-orange-500 text-white` | Main actions |
| Secondary | `bg-gray-100 text-gray-700` | Secondary actions |
| Success | `bg-emerald-500 text-white` | Confirm/Paid |
| Danger | `bg-red-500 text-white` | Delete/Void |
| Ghost | `text-gray-600 hover:bg-gray-100` | Icon buttons |
| Outline | `border border-gray-300 text-gray-700` | Alternative |

### Forms
- Full-width inputs on mobile layouts
- Inline label + input on desktop forms
- Validation error shown below input (`text-red-500 text-sm`)
- Required fields marked with `*`

### Tables
- Alternating row colors (`bg-white` / `bg-gray-50`)
- Sortable column headers
- Pagination at bottom (20 items per page)
- Action column with dropdown menu
- Checkbox column for bulk actions

### Modal/Dialog
- Centered overlay with backdrop blur
- Title + description in header
- Actions at bottom right (Cancel / Confirm)
- Sizes: `sm` (400px), `md` (500px), `lg` (600px), `xl` (800px)

---

## Design Inspirations

### POS Interface Inspiration
- **Toast POS** — Clean, card-based menu grid, left sidebar categories
- **Square POS** — Simple, fast, minimal clicks to complete order
- **Petpooja** — Colorful category tabs, large touch-friendly buttons

### Dashboard Inspiration
- **Vercel Dashboard** — Clean metric cards, subtle animations
- **Linear** — Minimal, focused, great use of whitespace
- **Shopify Analytics** — Good chart placement and filter patterns

### KDS Inspiration
- **Toast KDS** — Large cards, color-coded by time elapsed
- **Square KDS** — Full-screen, minimal chrome, sound indicators

### QR Menu Inspiration
- **Zomato** — Image-heavy, clean typography, category filters
- **Swiggy** — Quick add-to-cart, smooth animations
- **Menulog** — Clear pricing, dietary tags

### Color Inspiration
- **Zomato** — Red (#E23744) — bold, energetic
- **Swiggy** — Orange (#FC8019) — warm, appetizing
- **Trell** — Teal + Coral — modern hospitality vibe
- **Toast** — Navy + Green — professional, trustworthy

---

## Responsive Breakpoints

| Breakpoint | Width | Target |
|------------|-------|--------|
| `sm` | 640px | Mobile phones |
| `md` | 768px | Tablets (QR menu) |
| `lg` | 1024px | Laptops (POS) |
| `xl` | 1280px | Desktops (Dashboard) |
| `2xl` | 1536px | Large screens (KDS) |

---

## Accessibility

- All interactive elements focusable
- Color contrast ratio ≥ 4.5:1
- ARIA labels on icon-only buttons
- Keyboard navigation for POS quick keys
- Screen reader support for order status changes
- Touch targets ≥ 44×44px on POS buttons
