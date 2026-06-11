# Phase 2 — Advanced Features

**Duration**: Weeks 9–16  
**Goal**: Add competitive differentiators — QR ordering, Kitchen Display System, loyalty program, multi-branch management, and WhatsApp integration.

---

## 1. QR Menu & QR Ordering

### Features
- **QR Menu**: Static QR codes at each table linking to digital menu
- **QR Ordering**: Customers scan QR → browse menu → place order directly
- No app installation required — works in browser
- Table-specific QR codes (digital table number assignment)
- Language toggle (English / Malayalam / Hindi)
- Cart management from customer side
- Order placed → directly sent to POS/KDS
- Real-time menu sync (changes reflect instantly)
- Item images, descriptions, and dietary tags
- Customizable QR code design (brand colors, logo)

### Pages (Customer-facing)
| Route | Description |
|-------|-------------|
| `/menu/[table]` | Customer QR ordering page |
| `/order/[id]/status` | Order status tracking |

### Pages (Admin)
| Route | Description |
|-------|-------------|
| `/qr-menu` | QR code generation & management |
| `/qr-menu/settings` | QR menu appearance settings |

### Technical Notes
- QR codes generated as SVGs/PNGs via `qrcode` library
- Table QR printed and laminated for durability
- Session-based cart (no login required for customers)
- WebSocket for real-time order updates

---

## 2. Kitchen Display System (KDS)

### Features
- Real-time order display from POS and QR ordering
- Color-coded status: New (yellow), Preparing (orange), Ready (green)
- Sound alert for new orders
- Order bumping (mark as ready)
- Preparation time tracking
- Order filtering by table number or order type
- KOT history view
- Supports multiple kitchen stations (Beverage Station, Food Station)

### Pages
| Route | Description |
|-------|-------------|
| `/kitchen` | Main KDS view (fullscreen mode) |
| `/kitchen/history` | Completed orders history |

### UI Design
- Large text, high contrast — optimized for kitchen environment
- Touch-friendly buttons
- Auto-scroll for new orders
- Dark theme (reduces glare in kitchen lighting)

---

## 3. Customer Loyalty Program

### Features
- Points-based loyalty (e.g., 1 point per ₹100 spent)
- Points redemption (e.g., 100 points = ₹50 discount)
- Tier system: Silver (0–500 pts), Gold (501–2000 pts), Platinum (2000+ pts)
- Birthday/anniversary rewards
- Referral bonuses
- Points expiry configuration
- Customer-facing points balance (via QR ordering page)
- Automated reward coupons

### Pages
| Route | Description |
|-------|-------------|
| `/loyalty` | Loyalty program settings |
| `/loyalty/tiers` | Tier configuration |
| `/loyalty/rewards` | Reward management |
| `/loyalty/history` | Points transaction log |

---

## 4. WhatsApp Integration

### Features
- **Order Confirmation**: Automated WhatsApp message when order is placed
- **Bill Sharing**: Send e-bill as PDF/image via WhatsApp
- **Order Ready Notification**: Notify customer when order is ready
- **Promotional Messages**: Send offers to opted-in customers
- QR-code link to WhatsApp chat for customer support

### Technical Implementation
- WhatsApp Business API (via Twilio or WATI)
- Template message approval for proactive notifications
- Opt-in/opt-out management

---

## 5. Employee Management

### Features
- Employee directory (name, role, phone, email, shift)
- Attendance tracking (clock-in/clock-out via POS)
- Daily attendance report
- Role-based permissions (granular: can void bill, can apply discount, can access reports)
- Activity log per user

### Pages
| Route | Description |
|-------|-------------|
| `/employees` | Employee list |
| `/employees/[id]` | Employee detail |
| `/employees/attendance` | Attendance log |
| `/employees/roles` | Role & permission management |

---

## 6. Multi-Branch Management

### Features
- Centralized dashboard showing all outlets
- Add/manage outlets (name, address, phone, GST)
- Outlet-wise sales tracking
- Menu synchronization across outlets
- Central kitchen → outlet transfers
- Stock transfer between outlets
- Outlet-specific pricing
- Consolidated reports (brand-level)
- Role-based access per outlet

### Pages
| Route | Description |
|-------|-------------|
| `/outlets` | Outlet list |
| `/outlets/new` | Add new outlet |
| `/outlets/[id]` | Outlet dashboard |
| `/outlets/transfers` | Stock transfer management |

### Database Changes
- `outlet_id` foreign key on most tables
- `stock_transfers` table for inter-outlet movement

---

## 7. Online Ordering Website

### Features
- Public-facing website integrated with POS
- Menu display with images, descriptions, prices
- Customer cart & checkout
- Delivery / Pickup option
- Order confirmation page
- Payment integration (Razorpay / Stripe)
- Order tracking
- Admin panel to toggle online ordering on/off

### Pages (Public)
| Route | Description |
|-------|-------------|
| `/online-menu` | Public menu page |
| `/online-menu/cart` | Cart page |
| `/online-menu/checkout` | Checkout page |
| `/online-menu/order/[id]` | Order confirmation |

### Pages (Admin)
| Route | Description |
|-------|-------------|
| `/settings/online-ordering` | Toggle & configure online ordering |
| `/orders/online` | Incoming online orders |

---

## 8. Digital Menu Board

### Features
- TV/monitor display mode
- Auto-rotating menu items
- Category-wise slides
- Promotional banner support
- Real-time sync with menu changes
- Custom branding (logo, colors, tagline)

### Technical
- Full-screen kiosk mode on browser
- Configurable rotation interval
- Responsive to any screen resolution

---

## 9. Advanced Billing Features

### Features
- **Split bill**: Divide bill equally or by items
- **Partial payment**: Pay part in cash, part in UPI
- **Refund/Return**: Process refunds with reason
- **Credit billing**: Trusted customers can bill on credit
- **Settlement report**: End-of-day settlement with cash counting
