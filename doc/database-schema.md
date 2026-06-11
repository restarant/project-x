# Database Schema

**Database**: PostgreSQL  
**ORM**: Prisma  
**Naming Convention**: `snake_case` for tables, `camelCase` for Prisma fields

---

## Entity Relationship Overview

```
Users ──┬── Orders ──┬── OrderItems ── Products
         │            │
         │            └── Payments
         │
         ├── Customers
         ├── Expenses
         └── Attendance

Products ──┬── Categories
           ├── Inventory
           └── OrderItems

Inventory ──┬── Suppliers
            └── Purchases

Outlets ──── Users, Orders, Inventory, Products, Customers
```

---

## Table Definitions

### 1. Users

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PK, default uuid_generate_v4() | |
| name | VARCHAR(100) | NOT NULL | |
| email | VARCHAR(255) | UNIQUE, NOT NULL | |
| password_hash | VARCHAR(255) | NOT NULL | bcrypt hash |
| phone | VARCHAR(20) | | |
| role | ENUM('admin', 'manager', 'cashier', 'kitchen') | NOT NULL, default 'cashier' | |
| outlet_id | UUID | FK → Outlets.id | null for super admin |
| is_active | BOOLEAN | default true | |
| avatar_url | TEXT | | |
| created_at | TIMESTAMP | default NOW() | |
| updated_at | TIMESTAMP | default NOW() | |

### 2. Customers

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PK | |
| name | VARCHAR(100) | NOT NULL | |
| phone | VARCHAR(20) | NOT NULL | |
| email | VARCHAR(255) | | |
| total_visits | INTEGER | default 0 | |
| total_spent | DECIMAL(10,2) | default 0 | |
| loyalty_points | INTEGER | default 0 | |
| loyalty_tier | ENUM('silver','gold','platinum') | default 'silver' | |
| last_visit_at | TIMESTAMP | | |
| notes | TEXT | | |
| created_at | TIMESTAMP | default NOW() | |

### 3. Outlets (for multi-branch)

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PK | |
| name | VARCHAR(100) | NOT NULL | |
| code | VARCHAR(10) | UNIQUE, NOT NULL | Short code for bills |
| address | TEXT | | |
| phone | VARCHAR(20) | | |
| gstin | VARCHAR(20) | | GST number |
| is_active | BOOLEAN | default true | |
| opening_time | TIME | | |
| closing_time | TIME | | |
| created_at | TIMESTAMP | default NOW() | |

### 4. Categories

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PK | |
| name | VARCHAR(100) | NOT NULL | e.g., Tea, Coffee |
| slug | VARCHAR(100) | UNIQUE, NOT NULL | URL-friendly |
| description | TEXT | | |
| sort_order | INTEGER | default 0 | Display order |
| is_active | BOOLEAN | default true | |
| image_url | TEXT | | |
| created_at | TIMESTAMP | default NOW() | |

### 5. Products

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PK | |
| name | VARCHAR(200) | NOT NULL | |
| description | TEXT | | |
| category_id | UUID | FK → Categories.id | |
| price | DECIMAL(10,2) | NOT NULL | Selling price |
| cost_price | DECIMAL(10,2) | | For profit calculation |
| gst_rate | DECIMAL(5,2) | default 0 | GST percentage |
| unit | VARCHAR(20) | default 'piece' | piece, g, ml |
| is_available | BOOLEAN | default true | |
| is_vegetarian | BOOLEAN | default true | |
| image_url | TEXT | | |
| sort_order | INTEGER | default 0 | |
| outlet_id | UUID | FK → Outlets.id | null = all outlets |
| created_at | TIMESTAMP | default NOW() | |
| updated_at | TIMESTAMP | default NOW() | |

### 6. Product Variants

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PK | |
| product_id | UUID | FK → Products.id, ON DELETE CASCADE | |
| name | VARCHAR(50) | NOT NULL | Small/Medium/Large |
| price | DECIMAL(10,2) | NOT NULL | |
| is_default | BOOLEAN | default false | |
| sort_order | INTEGER | default 0 | |

### 7. Orders

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PK | |
| order_number | VARCHAR(20) | UNIQUE, NOT NULL | Auto-generated |
| order_type | ENUM('dine_in', 'takeaway', 'delivery') | NOT NULL | |
| status | ENUM('pending', 'kot_sent', 'preparing', 'ready', 'served', 'paid', 'cancelled') | default 'pending' | |
| table_number | VARCHAR(10) | | For dine-in |
| customer_id | UUID | FK → Customers.id | nullable |
| customer_name | VARCHAR(100) | | For walk-in |
| customer_phone | VARCHAR(20) | | |
| subtotal | DECIMAL(10,2) | NOT NULL | Before tax/discount |
| tax_amount | DECIMAL(10,2) | default 0 | |
| discount_amount | DECIMAL(10,2) | default 0 | |
| discount_type | ENUM('percentage', 'fixed') | | |
| total | DECIMAL(10,2) | NOT NULL | Final amount |
| payment_status | ENUM('pending', 'paid', 'refunded') | default 'pending' | |
| kot_notes | TEXT | | Kitchen instructions |
| user_id | UUID | FK → Users.id | Who took the order |
| outlet_id | UUID | FK → Outlets.id | |
| created_at | TIMESTAMP | default NOW() | |
| updated_at | TIMESTAMP | default NOW() | |

### 8. Order Items

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PK | |
| order_id | UUID | FK → Orders.id, ON DELETE CASCADE | |
| product_id | UUID | FK → Products.id | |
| variant_id | UUID | FK → ProductVariants.id | nullable |
| product_name | VARCHAR(200) | NOT NULL | Snapshot at order time |
| quantity | INTEGER | NOT NULL | |
| unit_price | DECIMAL(10,2) | NOT NULL | |
| total_price | DECIMAL(10,2) | NOT NULL | |
| notes | TEXT | | Item-specific instructions |
| status | ENUM('pending', 'preparing', 'ready', 'served', 'cancelled') | default 'pending' | KDS status |
| created_at | TIMESTAMP | default NOW() | |

### 9. Payments

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PK | |
| order_id | UUID | FK → Orders.id | |
| amount | DECIMAL(10,2) | NOT NULL | |
| payment_method | ENUM('cash', 'upi', 'card', 'credit') | NOT NULL | |
| reference | VARCHAR(100) | | UPI ref / card last 4 |
| status | ENUM('success', 'failed', 'refunded') | NOT NULL | |
| settled | BOOLEAN | default false | Settlement status |
| settled_at | TIMESTAMP | | |
| created_at | TIMESTAMP | default NOW() | |

### 10. Inventory Items

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PK | |
| name | VARCHAR(200) | NOT NULL | |
| sku | VARCHAR(50) | UNIQUE | Stock keeping unit |
| unit | VARCHAR(20) | NOT NULL | kg, g, L, ml, piece |
| current_stock | DECIMAL(10,2) | NOT NULL, default 0 | |
| min_stock_level | DECIMAL(10,2) | default 0 | Alert threshold |
| cost_per_unit | DECIMAL(10,2) | | |
| category | VARCHAR(100) | | Raw material / Packaging |
| supplier_id | UUID | FK → Suppliers.id | |
| outlet_id | UUID | FK → Outlets.id | |
| is_active | BOOLEAN | default true | |
| created_at | TIMESTAMP | default NOW() | |
| updated_at | TIMESTAMP | default NOW() | |

### 11. Inventory Transactions

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PK | |
| inventory_id | UUID | FK → InventoryItems.id | |
| type | ENUM('purchase', 'consumption', 'wastage', 'adjustment', 'transfer_out', 'transfer_in') | NOT NULL | |
| quantity | DECIMAL(10,2) | NOT NULL | |
| unit_cost | DECIMAL(10,2) | | |
| total_cost | DECIMAL(10,2) | | |
| reference_id | UUID | | Order ID / Purchase ID |
| notes | TEXT | | |
| user_id | UUID | FK → Users.id | |
| created_at | TIMESTAMP | default NOW() | |

### 12. Suppliers

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PK | |
| name | VARCHAR(200) | NOT NULL | |
| contact_person | VARCHAR(100) | | |
| phone | VARCHAR(20) | | |
| email | VARCHAR(255) | | |
| address | TEXT | | |
| gstin | VARCHAR(20) | | |
| is_active | BOOLEAN | default true | |
| created_at | TIMESTAMP | default NOW() | |

### 13. Purchases

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PK | |
| supplier_id | UUID | FK → Suppliers.id | |
| invoice_number | VARCHAR(50) | | |
| total_amount | DECIMAL(10,2) | NOT NULL | |
| payment_status | ENUM('paid', 'unpaid', 'partial') | default 'unpaid' | |
| notes | TEXT | | |
| user_id | UUID | FK → Users.id | |
| outlet_id | UUID | FK → Outlets.id | |
| created_at | TIMESTAMP | default NOW() | |

### 14. Purchase Items

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PK | |
| purchase_id | UUID | FK → Purchases.id | |
| inventory_id | UUID | FK → InventoryItems.id | |
| quantity | DECIMAL(10,2) | NOT NULL | |
| unit_cost | DECIMAL(10,2) | NOT NULL | |
| total_cost | DECIMAL(10,2) | NOT NULL | |

### 15. Expenses

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PK | |
| category | VARCHAR(100) | NOT NULL | Rent, Electricity, Salary... |
| amount | DECIMAL(10,2) | NOT NULL | |
| description | TEXT | | |
| date | DATE | NOT NULL | |
| payment_method | VARCHAR(50) | | |
| receipt_url | TEXT | | |
| is_recurring | BOOLEAN | default false | |
| user_id | UUID | FK → Users.id | |
| outlet_id | UUID | FK → Outlets.id | |
| created_at | TIMESTAMP | default NOW() | |

### 16. Employee Attendance

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PK | |
| user_id | UUID | FK → Users.id | |
| date | DATE | NOT NULL | |
| clock_in | TIMESTAMP | NOT NULL | |
| clock_out | TIMESTAMP | | |
| status | ENUM('present', 'absent', 'late', 'half_day') | NOT NULL | |
| notes | TEXT | | |
| created_at | TIMESTAMP | default NOW() | |

### 17. Stock Transfers (Multi-branch)

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PK | |
| from_outlet_id | UUID | FK → Outlets.id | |
| to_outlet_id | UUID | FK → Outlets.id | |
| status | ENUM('pending', 'in_transit', 'received', 'cancelled') | default 'pending' | |
| total_items | INTEGER | | |
| notes | TEXT | | |
| requested_by | UUID | FK → Users.id | |
| received_by | UUID | FK → Users.id | nullable |
| created_at | TIMESTAMP | default NOW() | |
| received_at | TIMESTAMP | | |

### 18. Stock Transfer Items

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PK | |
| transfer_id | UUID | FK → StockTransfers.id | |
| inventory_id | UUID | FK → InventoryItems.id | |
| quantity | DECIMAL(10,2) | NOT NULL | |
| unit_cost | DECIMAL(10,2) | | |

### 19. Loyalty Transactions

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PK | |
| customer_id | UUID | FK → Customers.id | |
| points | INTEGER | NOT NULL | Positive = earned, negative = redeemed |
| type | ENUM('earned', 'redeemed', 'expired', 'bonus') | NOT NULL | |
| reference_id | UUID | | Order ID |
| description | VARCHAR(255) | | |
| created_at | TIMESTAMP | default NOW() | |

### 20. Feedback

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PK | |
| customer_id | UUID | FK → Customers.id | nullable |
| order_id | UUID | FK → Orders.id | |
| rating | INTEGER | CHECK (1-5) | |
| comment | TEXT | | |
| created_at | TIMESTAMP | default NOW() | |

### 21. Settings

| Column | Type | Constraints | Description |
|--------|------|-------------|-------------|
| id | UUID | PK | |
| outlet_id | UUID | FK → Outlets.id | UNIQUE per outlet |
| key | VARCHAR(100) | NOT NULL | |
| value | JSONB | NOT NULL | |
| updated_at | TIMESTAMP | default NOW() | |

---

## Prisma Schema Notes

When generating Prisma schema:

- Use `@id @default(uuid())` for UUIDs
- Use `@updatedAt` for `updated_at` fields
- Use `@@map("table_name")` to keep snake_case table names
- Use `enum` for status/type fields
- Add `@@index([outlet_id])` on tables filtered by outlet
- Add `@@index([created_at])` for report queries
