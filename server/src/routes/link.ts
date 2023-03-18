import { Router } from "express";
import linkControllers from "../controllers/linkControllers";

const linkRouter = Router();

linkRouter.post("/", linkControllers.createLink);
linkRouter.get("/:id", linkControllers.getOne);

export default linkRouter;
