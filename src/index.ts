import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import { productRouter } from "./routers/product.router";
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
// app.use(express.static(path.join(__dirname, "../client/build/")));

app.use("/", productRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>
  console.log(`Server is listening on port ${PORT}........`)
);
