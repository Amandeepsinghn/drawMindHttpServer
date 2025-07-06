import express, { Router } from "express";
import { Request, Response } from "express";
const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.json({
    message: "hello from the world",
  });
});

export const testingRouter: Router = router;
