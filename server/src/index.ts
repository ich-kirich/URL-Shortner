import express from "express";
import dotenv from "dotenv";
import sequelize from "./db";

dotenv.config({ path: "../.env" });
const app = express();
const port = process.env.PORT;
const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(port, () => console.log(`Running on port ${port}`));
  } catch (e) {
    console.log(e);
  }
};

app.get("/", (request, response) => {
  response.send("Hello world!");
});

start();
