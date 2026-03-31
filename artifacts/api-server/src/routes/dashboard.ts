import { Router, type IRouter } from "express";
import * as crypto from "crypto";

const router: IRouter = Router();

function getExpectedToken(): string {
  const secret = process.env.SESSION_SECRET;
  if (!secret) {
    throw new Error("SESSION_SECRET environment variable is required but was not provided.");
  }
  return crypto.createHmac("sha256", secret).update("moose-dashboard-valid").digest("hex");
}

function verifyToken(token: string): boolean {
  try {
    const expected = getExpectedToken();
    return crypto.timingSafeEqual(Buffer.from(token, "hex"), Buffer.from(expected, "hex"));
  } catch {
    return false;
  }
}

router.post("/dashboard/login", (req, res): void => {
  const { username, password } = req.body as { username?: string; password?: string };

  if (!username || !password) {
    res.status(400).json({ error: "Username and password required" });
    return;
  }

  const expectedUsername = "moose";
  const storedSecret = (process.env.DASHBOARD_PASSWORD_HASH || "").trim();

  if (!storedSecret) {
    res.status(503).json({ error: "Dashboard credentials not configured" });
    return;
  }

  const inputHash = crypto.createHash("sha256").update(password).digest("hex");
  const storedHash = crypto.createHash("sha256").update(storedSecret).digest("hex");

  const usernameMatch = username === expectedUsername;
  const passwordMatch = crypto.timingSafeEqual(
    Buffer.from(inputHash, "hex"),
    Buffer.from(storedHash, "hex"),
  );

  if (!usernameMatch || !passwordMatch) {
    res.status(401).json({ error: "Invalid credentials" });
    return;
  }

  try {
    const token = getExpectedToken();
    res.json({ token });
  } catch {
    res.status(503).json({ error: "Session secret not configured" });
  }
});

export { verifyToken };
export default router;
