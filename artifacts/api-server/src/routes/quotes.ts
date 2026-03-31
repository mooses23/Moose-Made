import { Router, type IRouter } from "express";
import { db, quotesTable } from "@workspace/db";
import { SubmitQuoteBody, GetQuotesResponse } from "@workspace/api-zod";
import { verifyToken } from "./dashboard";

const router: IRouter = Router();

router.post("/quotes", async (req, res): Promise<void> => {
  const parsed = SubmitQuoteBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const [quote] = await db
    .insert(quotesTable)
    .values({
      firstName: parsed.data.firstName,
      lastName: parsed.data.lastName,
      email: parsed.data.email,
      phone: parsed.data.phone ?? null,
      company: parsed.data.company ?? null,
      productCategory: parsed.data.productCategory,
      packagingType: parsed.data.packagingType,
      dimensions: parsed.data.dimensions ?? null,
      weight: parsed.data.weight ?? null,
      quantity: parsed.data.quantity,
      budgetRange: parsed.data.budgetRange ?? null,
      launchTimeline: parsed.data.launchTimeline ?? null,
      materialPreferences: parsed.data.materialPreferences ?? null,
      structuralFeatures: parsed.data.structuralFeatures ?? null,
      projectDescription: parsed.data.projectDescription ?? null,
      attachedFileNames: parsed.data.attachedFileNames ?? null,
    })
    .returning();

  res.status(201).json({
    id: quote.id,
    firstName: quote.firstName,
    lastName: quote.lastName,
    email: quote.email,
    phone: quote.phone ?? undefined,
    company: quote.company ?? undefined,
    productCategory: quote.productCategory,
    packagingType: quote.packagingType,
    dimensions: quote.dimensions ?? undefined,
    weight: quote.weight ?? undefined,
    quantity: quote.quantity,
    budgetRange: quote.budgetRange ?? undefined,
    launchTimeline: quote.launchTimeline ?? undefined,
    materialPreferences: quote.materialPreferences ?? undefined,
    structuralFeatures: quote.structuralFeatures ?? undefined,
    projectDescription: quote.projectDescription ?? undefined,
    attachedFileNames: quote.attachedFileNames ?? undefined,
    submittedAt: quote.submittedAt.toISOString(),
  });
});

router.get("/quotes", async (req, res): Promise<void> => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  const token = authHeader.slice(7);
  if (!verifyToken(token)) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  const quotes = await db
    .select()
    .from(quotesTable)
    .orderBy(quotesTable.submittedAt);

  const result = quotes.map((q) => ({
    id: q.id,
    firstName: q.firstName,
    lastName: q.lastName,
    email: q.email,
    phone: q.phone ?? undefined,
    company: q.company ?? undefined,
    productCategory: q.productCategory,
    packagingType: q.packagingType,
    dimensions: q.dimensions ?? undefined,
    weight: q.weight ?? undefined,
    quantity: q.quantity,
    budgetRange: q.budgetRange ?? undefined,
    launchTimeline: q.launchTimeline ?? undefined,
    materialPreferences: q.materialPreferences ?? undefined,
    structuralFeatures: q.structuralFeatures ?? undefined,
    projectDescription: q.projectDescription ?? undefined,
    attachedFileNames: q.attachedFileNames ?? undefined,
    submittedAt: q.submittedAt.toISOString(),
  }));

  res.json(GetQuotesResponse.parse(result));
});

export default router;
