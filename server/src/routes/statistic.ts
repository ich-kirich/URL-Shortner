import { Router } from "express";
import statisticControllers from "../controllers/statisticControllers";

const statisticRouter = Router();

statisticRouter.post("/", statisticControllers.createStatistic);
statisticRouter.get("/", statisticControllers.getStatistic);

export default statisticRouter;
