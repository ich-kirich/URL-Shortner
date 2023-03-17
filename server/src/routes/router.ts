import { Router } from "express";
import statisticRouter from "./statistic";
import linkRouter from "./link";

const router = Router();
router.use("/link", linkRouter);
router.use("/statistic", statisticRouter);

export default router;
