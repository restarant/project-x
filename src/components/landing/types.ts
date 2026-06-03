export type NavLink = { label: string; href: string; meta?: string };

export type MenuLocale = { code: string; label: string };

export type FeatureItem = {
  href?: string;
  icon: string;
  name: string;
  description: string;
  chips: string[];
};

export type ModuleItem = {
  href: string;
  icon: string;
  name: string;
  description: string;
  cta: string;
  highlighted?: boolean;
};

export type PricingFeature = {
  label: string;
  included: boolean;
};

export type PricingPlan = {
  id: string;
  tier: string;
  price: string;
  priceSuffix?: string;
  note: string;
  features: PricingFeature[];
  limit?: string;
  cta: string;
  href: string;
  popular?: boolean;
  customPrice?: boolean;
};

export type StatPill = { value: string; label: string };

export type MockStat = {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
};

export type MockOrder = {
  id: string;
  type: string;
  amount: string;
  items: string;
  status: "served" | "billing" | "pending";
};
