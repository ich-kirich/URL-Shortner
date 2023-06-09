import express from "express";
import cors from "cors";
import config from "config";
import { StatusCodes } from "http-status-codes";
import router from "./routes/router";
import ErrorHandling from "./middleware/errorhandlingmiddleware";
import ApiError from "./error/apiError";
import initDb from "../models/initDb";

const app = express();
app.use(cors());
app.use(express.json());
app.use("", router);
app.use(ErrorHandling);
app.set("trust proxy", true);

const startServer = async () => {
  try {
    await initDb();
    app.listen(config.get("server_port"), () =>
      console.log(`Running on port ${config.get("server_port")}`),
    );
  } catch (e) {
    console.error(new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, e.message));
  }
};

startServer();
