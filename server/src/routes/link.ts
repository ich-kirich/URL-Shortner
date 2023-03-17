import { Router } from "express";

const linkRouter = Router();

linkRouter.post("/");
linkRouter.get("/", (request, response) => {
  response.status(200).json({ message: "IT IS WORKIING!!!" });
});

export default linkRouter;
