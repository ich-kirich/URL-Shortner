import { Router } from "express";
import linkRouter from "./link";

const router = Router();
router.use("/", linkRouter);

export default router;
