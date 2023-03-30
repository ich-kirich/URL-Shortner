import express from "express";
import cors from "cors";
import config from "config";
import { StatusCodes } from "http-status-codes";
import initDb from "./models/models";
import router from "./routes/router";
import ErrorHandling from "./middleware/errorhandlingmiddleware";
import ApiError from "./error/apiError";

const app = express();
app.use(cors());
app.use(express.json());
app.use("", router);
app.use(ErrorHandling);
app.set("trust proxy", true);

console.log(config.get("PORT"));

const startServer = async () => {
  try {
    await initDb();
    app.listen(config.get("PORT"), () =>
      console.log(`Running on port ${config.get("PORT")}`),
    );
  } catch (e) {
    console.error(new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, e.message));
  }
};

startServer();
