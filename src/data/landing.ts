import type {
  FeatureItem,
  MenuLocale,
  MockOrder,
  MockStat,
  ModuleItem,
  NavLink,
  PricingPlan,
  StatPill,
} from "@/components/landing/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Features", href: "#features", meta: "6 tools" },
  { label: "Modules", href: "#modules", meta: "5 apps" },
  { label: "Pricing", href: "#pricing", meta: "4 plans" },
];

export const MENU_LEGAL_LINKS: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export const MENU_LOCALES: MenuLocale[] = [
  { code: "EN", label: "English" },
  { code: "HI", label: "Hindi" },
  { code: "ES", label: "Spanish" },
  { code: "FR", label: "French" },
];

export const FOOTER_LINKS: NavLink[] = [
  { label: "Billing", href: "/billing" },
  { label: "Orders", href: "/order" },
  { label: "Inventory", href: "/inventory" },
  { label: "Analytics", href: "/analytics" },
  { label: "Pricing", href: "/pricing" },
];

export const HERO_PILLS: StatPill[] = [
  { value: "Fast", label: "billing & KOT" },
  { value: "Real-time", label: "inventory alerts" },
  { value: "PDF", label: "reports & invoices" },
];

export const MOCK_STATS: MockStat[] = [
  { label: "Today Sales", value: "₹31,480", change: "↑ 9%", trend: "up" },
  { label: "Orders", value: "164", change: "↑ 12 new", trend: "up" },
  { label: "Low Stock", value: "6", change: "Reorder", trend: "down" },
  { label: "Pending Bills", value: "9", change: "Active", trend: "up" },
];

export const MOCK_ORDERS: MockOrder[] = [
  { id: "#3812", type: "Dine-in · T4", amount: "₹1,240", items: "6 items", status: "served" },
  { id: "#3813", type: "Takeout", amount: "₹580", items: "3 items", status: "billing" },
  { id: "#3814", type: "Delivery", amount: "₹2,100", items: "9 items", status: "pending" },
];

export const MOCK_SIDEBAR = [
  { label: "⊞ Dashboard", active: true },
  { label: "🧾 Billing", active: false },
  { label: "📋 Orders", active: false },
  { label: "📦 Inventory", active: false },
  { label: "🛒 Purchase", active: false },
  { label: "📊 Analytics", active: false },
];

export const FEATURES: FeatureItem[] = [
  {
    href: "/billing",
    icon: "🧾",
    name: "Billing & POS",
    description:
      "Fast, accurate billing for dine-in, takeout, and delivery. GST invoices, KOT generation, and PDF receipts.",
    chips: ["GST Ready", "Cash/UPI/Card", "KOT", "PDF Bills"],
  },
  {
    href: "/order",
    icon: "📋",
    name: "Order Management",
    description:
      "Track and manage all orders — dine-in, takeout, and delivery — from one live screen in real time.",
    chips: ["Dine-in", "Takeout", "Delivery", "Live tracking"],
  },
  {
    href: "/inventory",
    icon: "📦",
    name: "Inventory",
    description:
      "Real-time inventory tracking with automatic low-stock alerts so you never run out of critical ingredients.",
    chips: ["Real-time", "Low-stock alerts", "Auto-track"],
  },
  {
    href: "/purchase",
    icon: "🛒",
    name: "Purchase",
    description:
      "Manage suppliers, create purchase orders, log expenses, and keep your supply chain running smoothly.",
    chips: ["Suppliers", "Purchase orders", "Expenses"],
  },
  {
    href: "/analytics",
    icon: "📊",
    name: "Analytics & PDF",
    description:
      "Visualize sales, inventory trends, and business performance. Generate PDF reports with one click.",
    chips: ["Sales charts", "PDF export", "Inventory reports"],
  },
  {
    icon: "🔐",
    name: "Roles & Access",
    description:
      "Staff role management with separate access levels for owners, managers, and cashiers. Secure by default.",
    chips: ["Owner", "Manager", "Cashier", "Audit logs"],
  },
];

export const MODULES: ModuleItem[] = [
  {
    href: "/billing",
    icon: "🧾",
    name: "Billing",
    description:
      "Fast, accurate billing for dine-in, takeout, and delivery. Generate GST-compliant invoices and print receipts instantly.",
    cta: "Open Billing →",
  },
  {
    href: "/order",
    icon: "📋",
    name: "Order Management",
    description:
      "Track and manage orders from all sources in one place. Real-time status updates from pending to served.",
    cta: "Open Orders →",
  },
  {
    href: "/inventory",
    icon: "📦",
    name: "Inventory",
    description:
      "Real-time inventory tracking and alerts for low stock. Never run short on key ingredients during peak hours.",
    cta: "Open Inventory →",
  },
  {
    href: "/purchase",
    icon: "🛒",
    name: "Purchase",
    description:
      "Manage suppliers, purchase orders, and expenses easily. Keep your supply chain clean and organised.",
    cta: "Open Purchase →",
  },
  {
    href: "/analytics",
    icon: "📊",
    name: "Analytics & PDF",
    description:
      "Visualize sales, inventory, and generate detailed PDF reports. Business intelligence at a glance.",
    cta: "Open Analytics →",
  },
  {
    href: "/demo",
    icon: "🚀",
    name: "Try it Live",
    description:
      "All modules are live and working. Open the demo and explore the full Restro-Mate experience yourself.",
    cta: "Launch Demo →",
    highlighted: true,
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "lite",
    tier: "Lite",
    price: "₹999",
    priceSuffix: "/mo",
    note: "For small restaurants starting out",
    features: [
      { label: "Billing & POS", included: true },
      { label: "Order Management", included: true },
      { label: "Inventory (basic)", included: true },
      { label: "PDF Creation", included: true },
      { label: "Analytics", included: false },
      { label: "Purchase Management", included: false },
    ],
    limit: "Limited support included",
    cta: "Choose Lite",
    href: "/pricing",
  },
  {
    id: "pro",
    tier: "Pro",
    price: "₹2,499",
    priceSuffix: "/mo",
    note: "For growing restaurants",
    popular: true,
    features: [
      { label: "Billing & POS", included: true },
      { label: "Order Management", included: true },
      { label: "Inventory (advanced)", included: true },
      { label: "Purchase Management", included: true },
      { label: "Analytics & PDF", included: true },
      { label: "Email Support", included: true },
    ],
    limit: "No custom integrations",
    cta: "Choose Pro →",
    href: "/pricing",
  },
  {
    id: "enterprise",
    tier: "Enterprise",
    price: "₹4,999",
    priceSuffix: "/mo",
    note: "For large restaurants & chains",
    features: [
      { label: "All Pro features", included: true },
      { label: "Custom Integrations", included: true },
      { label: "Priority Support", included: true },
      { label: "Multi-location Management", included: true },
    ],
    cta: "Choose Enterprise",
    href: "/pricing",
  },
  {
    id: "custom",
    tier: "Custom",
    price: "Talk to us",
    customPrice: true,
    note: "Tailored for your unique needs",
    features: [
      { label: "Tailored features", included: true },
      { label: "Custom integrations", included: true },
      { label: "Dedicated support", included: true },
      { label: "Flexible pricing", included: true },
    ],
    cta: "Request a Quote",
    href: "/pricing",
  },
];
