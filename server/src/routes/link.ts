import { Router } from "express";
import linkControllers from "../controllers/linkControllers";

const linkRouter = Router();

linkRouter.post("/", linkControllers.createLink);
linkRouter.get("/:id", linkControllers.redirectByLink);
linkRouter.get("/info/:id", linkControllers.getLink);

export default linkRouter;
