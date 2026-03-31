import { pgTable, text, serial, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const quotesTable = pgTable("quotes", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  company: text("company"),
  productCategory: text("product_category").notNull(),
  packagingType: text("packaging_type").notNull(),
  dimensions: text("dimensions"),
  weight: text("weight"),
  quantity: text("quantity").notNull(),
  budgetRange: text("budget_range"),
  launchTimeline: text("launch_timeline"),
  materialPreferences: text("material_preferences"),
  structuralFeatures: text("structural_features"),
  projectDescription: text("project_description"),
  attachedFileNames: jsonb("attached_file_names").$type<string[]>(),
  submittedAt: timestamp("submitted_at", { withTimezone: true }).notNull().defaultNow(),
});

export const insertQuoteSchema = createInsertSchema(quotesTable).omit({ id: true, submittedAt: true });
export type InsertQuote = z.infer<typeof insertQuoteSchema>;
export type Quote = typeof quotesTable.$inferSelect;
