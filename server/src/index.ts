import express from "express";
import cors from "cors";
import initDb from "./models/models";
import router from "./routes/router";
import ErrorHandling from "./middleware/ErrorHandlingMiddleWare";
import { PORT } from "./libs/constants";
import { tryCatchWrapper } from "./libs/server";
import ApiError from "./error/apiError";

const app = express();
app.use(cors());
app.use(express.json());
app.use("", router);
app.use(ErrorHandling);
app.enable("trust proxy");

const startServer = () => {
  tryCatchWrapper(
    async () => {
      await initDb();
      app.listen(PORT, () => console.log(`Running on port ${PORT}`));
    },
    (e: Error) => {
      console.error(ApiError.internal(e.message));
    },
  );
};

startServer();
