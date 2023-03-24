import express from "express";
import cors from "cors";
import initDb from "./models/models";
import router from "./routes/router";
import ErrorHandling from "./middleware/errorHandlingMiddleware";
import { PORT } from "./libs/constants";
import ApiError from "./error/apiError";

const app = express();
app.use(cors());
app.use(express.json());
app.use("", router);
app.use(ErrorHandling);

const startServer = async () => {
  try {
    await initDb();
    app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  } catch (e) {
    console.error(ApiError.internal(e.message));
  }
};

startServer();
