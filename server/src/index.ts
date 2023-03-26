import express from "express";
import cors from "cors";
import config from "config";
import dotenv from "dotenv";
import initDb from "./models/models";
import router from "./routes/router";
import ErrorHandling from "./middleware/errorHandlingMiddleware";
import ApiError from "./error/apiError";

const app = express();
app.use(cors());
app.use(express.json());
app.use("", router);
app.use(ErrorHandling);

dotenv.config();
const startServer = async () => {
  try {
    await initDb();
    app.listen(config.get("PORT"), () =>
      console.log(`Running on port ${config.get("PORT")}`),
    );
  } catch (e) {
    console.error(ApiError.internal(e.message));
  }
};

startServer();
