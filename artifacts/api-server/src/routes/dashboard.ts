import { Router, type IRouter } from "express";
import * as crypto from "crypto";

const router: IRouter = Router();

function getExpectedToken(): string {
  const secret = process.env.SESSION_SECRET || "fallback-secret";
  return crypto.createHmac("sha256", secret).update("moose-dashboard-valid").digest("hex");
}

function verifyToken(token: string): boolean {
  const expected = getExpectedToken();
  return crypto.timingSafeEqual(Buffer.from(token, "hex"), Buffer.from(expected, "hex"));
}

router.post("/dashboard/login", (req, res): void => {
  const { username, password } = req.body as { username?: string; password?: string };

  if (!username || !password) {
    res.status(400).json({ error: "Username and password required" });
    return;
  }

  const expectedUsername = "moose";
  const storedSecret = process.env.DASHBOARD_PASSWORD_HASH || "";

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

  const token = getExpectedToken();
  res.json({ token });
});

export { verifyToken };
export default router;
