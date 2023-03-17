import express from "express";
import cors from "cors";
import initDb from "./models/models";

const app = express();
app.use(cors());
app.use(express.json());

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
  response.status(200).json({ message: "WORKIING!!!" });
});

start();
