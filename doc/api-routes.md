# API Routes Reference

**Base URL**: `/api`  
**Auth**: JWT in httpOnly cookie or `Authorization: Bearer <token>` header  
**Response Format**: `{ success: boolean, data?: any, error?: string, meta?: { page, limit, total } }`

---

## Authentication

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/api/auth/login` | Login with email + password | No |
| POST | `/api/auth/register` | Register new user (admin) | Admin |
| POST | `/api/auth/logout` | Clear session | Yes |
| GET | `/api/auth/me` | Get current user profile | Yes |
| PUT | `/api/auth/me` | Update profile | Yes |
| POST | `/api/auth/reset-password` | Request password reset | No |

---

## Products

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | List all products (query: `?category=id&search=text&available=true&page=1&limit=20`) |
| GET | `/api/products/[id]` | Get single product with variants |
| POST | `/api/products` | Create product |
| PUT | `/api/products/[id]` | Update product |
| DELETE | `/api/products/[id]` | Delete product |
| PATCH | `/api/products/[id]/availability` | Toggle availability |

### Product Payload

```json
{
  "name": "Masala Chai",
  "description": "Spiced Indian tea",
  "category_id": "uuid",
  "price": 30,
  "cost_price": 10,
  "gst_rate": 5,
  "unit": "cup",
  "is_vegetarian": true,
  "image_url": "https://...",
  "variants": [
    { "name": "Small", "price": 20, "is_default": false },
    { "name": "Large", "price": 40, "is_default": true }
  ]
}
```

---

## Categories

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/categories` | List categories (with product count) |
| POST | `/api/categories` | Create category |
| PUT | `/api/categories/[id]` | Update category |
| DELETE | `/api/categories/[id]` | Delete category |

---

## Orders

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/orders` | List orders (query: `?status=pending&type=dine_in&date=2024-01-01&outlet=id&page=1&limit=20`) |
| GET | `/api/orders/[id]` | Get order with items and payments |
| POST | `/api/orders` | Create order |
| PUT | `/api/orders/[id]` | Update order (status, notes) |
| DELETE | `/api/orders/[id]` | Void/cancel order |
| POST | `/api/orders/[id]/items` | Add item to existing order |
| PUT | `/api/orders/[id]/items/[itemId]` | Update order item |
| DELETE | `/api/orders/[id]/items/[itemId]` | Remove item from order |
| POST | `/api/orders/[id]/payments` | Add payment to order |

### Order Create Payload

```json
{
  "order_type": "dine_in",
  "table_number": "5",
  "customer_phone": "9876543210",
  "items": [
    { "product_id": "uuid", "variant_id": "uuid", "quantity": 2, "notes": "Less sugar" }
  ],
  "discount_type": "percentage",
  "discount_value": 10,
  "kot_notes": "Make it quick"
}
```

---

## Payments

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/payments` | List payments (query: `?method=cash&date=2024-01-01`) |
| GET | `/api/payments/[id]` | Get payment detail |
| POST | `/api/payments/refund` | Process refund |

---

## Customers

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/customers` | List customers (query: `?search=phone&page=1`) |
| GET | `/api/customers/[id]` | Get customer with purchase history |
| POST | `/api/customers` | Create customer |
| PUT | `/api/customers/[id]` | Update customer |
| GET | `/api/customers/[id]/orders` | Customer order history |
| GET | `/api/customers/[id]/loyalty` | Customer loyalty details |

---

## Inventory

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/inventory` | List inventory items (query: `?low_stock=true`) |
| GET | `/api/inventory/[id]` | Get inventory detail with transactions |
| POST | `/api/inventory` | Add inventory item |
| PUT | `/api/inventory/[id]` | Update inventory item |
| POST | `/api/inventory/[id]/adjust` | Adjust stock (add/waste) |
| GET | `/api/inventory/[id]/transactions` | Item transaction history |

---

## Purchases

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/purchases` | List purchase orders |
| GET | `/api/purchases/[id]` | Purchase detail with items |
| POST | `/api/purchases` | Create purchase order |
| PUT | `/api/purchases/[id]` | Update purchase |
| DELETE | `/api/purchases/[id]` | Delete purchase |

---

## Suppliers

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/suppliers` | List suppliers |
| POST | `/api/suppliers` | Add supplier |
| PUT | `/api/suppliers/[id]` | Update supplier |
| DELETE | `/api/suppliers/[id]` | Delete supplier |

---

## Expenses

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/expenses` | List expenses (query: `?category=Rent&from=2024-01-01&to=2024-02-01`) |
| POST | `/api/expenses` | Add expense |
| PUT | `/api/expenses/[id]` | Update expense |
| DELETE | `/api/expenses/[id]` | Delete expense |

---

## Reports

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/reports/daily-sales` | Daily sales summary (query: `?date=2024-01-01`) |
| GET | `/api/reports/monthly-sales` | Monthly sales (query: `?year=2024&month=1`) |
| GET | `/api/reports/best-sellers` | Top selling items (query: `?from=...&to=...&limit=10`) |
| GET | `/api/reports/profit` | Profit & loss (query: `?from=...&to=...`) |
| GET | `/api/reports/payment-methods` | Payment method breakdown |
| GET | `/api/reports/tax-summary` | GST collected summary |
| GET | `/api/reports/expenses` | Expense report |
| GET | `/api/reports/staff-performance` | Staff order metrics |
| GET | `/api/reports/inventory-consumption` | Inventory usage report |
| GET | `/api/reports/export` | Export report as CSV/PDF (query: `?type=daily-sales&format=csv&from=...&to=...`) |

---

## Kitchen (KDS)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/kitchen/orders` | Active KDS orders |
| GET | `/api/kitchen/orders/[id]` | KDS order detail |
| PUT | `/api/kitchen/orders/[id]/items/[itemId]/status` | Update item status (preparing/ready) |
| GET | `/api/kitchen/orders/history` | Completed orders |

---

## QR Menu

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/qr/generate` | Generate QR code for table |
| GET | `/api/qr/menu` | Get menu for customer-facing page |

---

## Outlets (Multi-Branch)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/outlets` | List outlets |
| POST | `/api/outlets` | Add outlet |
| PUT | `/api/outlets/[id]` | Update outlet |
| GET | `/api/outlets/[id]/dashboard` | Outlet dashboard data |
| GET | `/api/outlets/transfers` | List stock transfers |
| POST | `/api/outlets/transfers` | Create stock transfer |
| PUT | `/api/outlets/transfers/[id]` | Update transfer status |

---

## Employees

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/employees` | List employees |
| POST | `/api/employees` | Add employee |
| PUT | `/api/employees/[id]` | Update employee |
| GET | `/api/employees/attendance` | Attendance log (query: `?date=2024-01-01`) |
| POST | `/api/employees/attendance/clock-in` | Clock in |
| PUT | `/api/employees/attendance/[id]/clock-out` | Clock out |

---

## Loyalty

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/loyalty/tiers` | Get tier config |
| PUT | `/api/loyalty/tiers` | Update tier config |
| GET | `/api/loyalty/transactions` | Points transaction log |
| POST | `/api/loyalty/redeem` | Redeem points for customer |

---

## Settings

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/settings` | Get settings (query: `?outlet=id`) |
| PUT | `/api/settings` | Update settings |

### Settings Keys

- `bill_prefix` — Bill number prefix
- `bill_next_number` — Next bill number
- `gst_enabled` — Enable GST calculation
- `default_gst` — Default GST rate
- `printer_type` — Thermal printer type
- `printer_auto_print` — Auto-print bill
- `currency_symbol` — ₹ by default
- `round_off` — Enable round-off
- `whatsapp_enabled` — WhatsApp integration
- `loyalty_points_per_rupee` — Points earning rate
- `loyalty_redeem_rate` — Points redemption rate
- `online_ordering_enabled` — Toggle online ordering

---

## Feedback

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/feedback` | List feedback |
| POST | `/api/feedback` | Submit feedback |
| GET | `/api/feedback/stats` | Rating statistics |

---

## Error Response Format

```json
{
  "success": false,
  "error": "Validation failed",
  "details": [
    { "field": "price", "message": "Price is required" }
  ]
}
```
