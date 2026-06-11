# Phase 1 — Core POS System

**Duration**: Weeks 1–8  
**Goal**: Fully functional POS system with billing, menu management, orders, inventory tracking, and reports.

---

## 1. Authentication & User Management

### Features
- Email/password login
- Role-based access (Admin, Manager, Cashier, Kitchen Staff)
- Session management with JWT
- Profile management
- Password reset

### Pages
| Route | Description |
|-------|-------------|
| `/login` | Login page |
| `/register` | User registration (admin only) |
| `/employees` | Manage staff accounts |

---

## 2. Dashboard

### Features
- Real-time sales summary (today, this week, this month)
- Active orders count
- Top-selling items
- Low-stock alerts
- Quick action buttons (New Order, Add Item, View Reports)
- Sales trend chart (last 7 days)

### Components
- `StatCard` — metric display
- `SalesChart` — line/bar chart for sales trends
- `RecentOrders` — latest orders table
- `LowStockAlerts` — inventory warnings
- `QuickActions` — shortcut buttons

---

## 3. Menu Management

### Features
- Add/Edit/Delete items with images
- Categories (Tea, Coffee, Snacks, Meals, Beverages, Desserts)
- Sub-categories
- Price management (selling price, cost price)
- Tax configuration (GST slab per item)
- Item availability toggle (available/out of stock)
- Variants (size: small/medium/large, with different pricing)
- Search & filter
- Bulk import via CSV/Excel

### Pages
| Route | Description |
|-------|-------------|
| `/menu` | Full menu list with search/filter |
| `/menu/new` | Add new item form |
| `/menu/[id]/edit` | Edit item form |
| `/menu/categories` | Manage categories |

### API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | List all products |
| POST | `/api/products` | Create product |
| PUT | `/api/products/[id]` | Update product |
| DELETE | `/api/products/[id]` | Delete product |
| GET | `/api/categories` | List categories |
| POST | `/api/categories` | Create category |

---

## 4. POS / Billing System

### Features
- 3-click billing flow
- Item search by name/category
- Cart management (add, update quantity, remove)
- Multiple tax slabs (GST 5%, 12%, 18%, 28%)
- Discount per item or per bill (percentage or fixed)
- KOT (Kitchen Order Ticket) generation
- Split bill across multiple customers
- Merge tables
- Multiple payment methods: Cash, UPI (QR), Card (swipe/machine)
- Bill printing (thermal printer support via WebUSB or Bluetooth)
- E-bill sharing via WhatsApp
- Invoice numbering (auto-increment, customizable prefix)
- Round-off settings
- Quick keys for top-selling items (touchscreen optimized)

### Pages
| Route | Description |
|-------|-------------|
| `/pos` | Main POS interface |
| `/pos/billing` | Billing screen with cart |

### Key Workflows

**3-Click Billing**
1. Select table or order type (Dine-in/Takeaway/Delivery)
2. Add items to cart (search or category grid)
3. Select payment method → Generate bill → Print/Send

**KOT Workflow**
1. Order items → Generate KOT
2. KOT sent to Kitchen Display System
3. Kitchen marks items as "Preparing" → "Ready"
4. Staff serves → Marks as "Served"

---

## 5. Order Management

### Features
- Order types: Dine-in, Takeaway, Delivery
- Table management (add, edit, merge, split tables)
- Order status tracking (New → KOT Sent → Preparing → Ready → Served → Paid)
- Search orders by number, customer, date
- Cancel/void orders (with reason and authorization)
- Re-print bills
- Order history by table/customer

### Pages
| Route | Description |
|-------|-------------|
| `/orders` | All orders with filters |
| `/orders/[id]` | Order detail view |
| `/orders/tables` | Floor plan table view |

---

## 6. Inventory Management

### Features
- Stock tracking (current stock, unit, minimum threshold)
- Low-stock alerts (dashboard + email/notification)
- Purchase entry (supplier, item, quantity, cost, date)
- Stock adjustment (add/waste/damage with reason)
- Auto stock deduction on order completion
- Raw material / recipe management
- Food cost calculation (cost price vs selling price)
- Supplier management
- Stock transfer between outlets (for multi-branch)
- Purchase order generation

### Pages
| Route | Description |
|-------|-------------|
| `/inventory` | Stock overview with search |
| `/inventory/items` | Manage inventory items |
| `/inventory/purchases` | Purchase history |
| `/inventory/purchases/new` | New purchase entry |
| `/inventory/suppliers` | Supplier list |
| `/inventory/recipes` | Recipe management |

### API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/inventory` | List inventory items |
| POST | `/api/inventory` | Add inventory item |
| PUT | `/api/inventory/[id]` | Update stock |
| GET | `/api/inventory/purchases` | Purchase list |
| POST | `/api/inventory/purchases` | Add purchase |
| GET | `/api/suppliers` | Supplier list |
| POST | `/api/suppliers` | Add supplier |

---

## 7. Reports & Analytics

### Features (15+ Reports)

**Sales Reports**
- Daily sales summary (with hourly breakdown)
- Monthly sales report
- Tax summary (GST collected)
- Payment method report (Cash vs UPI vs Card)
- Discount/Coupon usage report

**Menu Reports**
- Best-selling items (quantity & revenue)
- Slow-moving items
- Category-wise sales
- Item-wise profit margin

**Operational Reports**
- Order volume by time (peak hours)
- Table occupancy report
- Staff performance (orders processed per staff)
- KOT timing (preparation time analysis)

**Financial Reports**
- Daily P&L summary
- Expense report
- Net profit report

### Pages
| Route | Description |
|-------|-------------|
| `/reports` | Reports dashboard |
| `/reports/sales` | Sales reports with date picker |
| `/reports/menu` | Menu performance reports |
| `/reports/profit` | Profit & loss report |
| `/reports/export` | Export reports (CSV/PDF) |

---

## 8. Customer Management (Basic CRM)

### Features
- Customer database (name, phone, email, join date)
- Purchase history per customer
- Total visits & spend
- Last visit date
- Add customer during billing
- Quick search by phone number
- Customer feedback collection (rating + comment)

### Pages
| Route | Description |
|-------|-------------|
| `/customers` | Customer list |
| `/customers/[id]` | Customer detail with history |

---

## 9. Expenses Management

### Features
- Add expense (category, amount, description, date)
- Expense categories (Rent, Electricity, Salary, Ingredients, Maintenance)
- Recurring expenses setup
- Expense vs revenue comparison
- Monthly expense reports

### Pages
| Route | Description |
|-------|-------------|
| `/expenses` | Expense list |
| `/expenses/new` | Add expense |

---

## Delivery Information N/A

### Pages
| Route | Description |
|-------|-------------|
| `/settings` | System settings |
| `/settings/gst` | Tax configuration |
| `/settings/bill` | Bill format & printer |
| `/settings/users` | User management |
