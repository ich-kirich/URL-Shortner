import express from "express";
import cors from "cors";
import initDb from "./models/models";
import router from "./routes/router";
import ErrorHandling from "./middleware/ErrorHandlingMiddleWare";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", router);
app.use(ErrorHandling);

const port = process.env.PORT;
const start = async () => {
  try {
    await initDb();
    app.listen(port, () => console.log(`Running on port ${port}`));
  } catch (e) {
    console.log(e);
  }
};

app.get("/", (request, response) => {
  response.status(200).json({ message: response });
});

start();
