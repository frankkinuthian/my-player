import { Router } from "express";

const router = Router();

router.post("/", (req, res) => {
  res.send("Auth route with POST method");
});

export default router;
