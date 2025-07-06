import express from "express";
import { testingRouter } from "./routes/test";
const app = express();
const port = process.env.PORT || 8080;

app.use("/", testingRouter);

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});
