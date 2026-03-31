import { Router, type IRouter } from "express";
import { db, contactsTable } from "@workspace/db";
import { SubmitContactBody } from "@workspace/api-zod";
import { desc } from "drizzle-orm";
import { verifyToken } from "./dashboard";

const router: IRouter = Router();

router.get("/contacts", async (req, res): Promise<void> => {
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
  const contacts = await db
    .select()
    .from(contactsTable)
    .orderBy(desc(contactsTable.submittedAt));

  const result = contacts.map((c) => ({
    id: c.id,
    name: c.name,
    email: c.email,
    subject: c.subject ?? undefined,
    message: c.message,
    submittedAt: c.submittedAt.toISOString(),
  }));

  res.json(result);
});

router.post("/contact", async (req, res): Promise<void> => {
  const parsed = SubmitContactBody.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }

  const [contact] = await db
    .insert(contactsTable)
    .values({
      name: parsed.data.name,
      email: parsed.data.email,
      subject: parsed.data.subject ?? null,
      message: parsed.data.message,
    })
    .returning();

  res.status(201).json({
    id: contact.id,
    name: contact.name,
    email: contact.email,
    subject: contact.subject ?? undefined,
    message: contact.message,
    submittedAt: contact.submittedAt.toISOString(),
  });
});

export default router;
