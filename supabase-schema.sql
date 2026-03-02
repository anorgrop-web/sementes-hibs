-- Supabase Schema for Versia Garden Hibiscus
-- Table: hibiscus_orders

CREATE TABLE IF NOT EXISTS hibiscus_orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  stripe_customer_id TEXT UNIQUE NOT NULL,
  customer_email TEXT NOT NULL,
  customer_name TEXT NOT NULL,
  customer_phone TEXT,
  shipping_address JSONB NOT NULL,
  items JSONB NOT NULL,
  total_amount_cents INTEGER NOT NULL,
  currency TEXT NOT NULL,
  upsell1_status TEXT,
  upsell2_status TEXT
);
