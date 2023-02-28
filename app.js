const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const productRouter = require("./routes/productRoute");
const categoryRouter = require("./routes/categoryRoute");
const orderRouter = require("./routes/orderRoutes");

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());

app.use("/api/products", productRouter);
app.use("/api/category", categoryRouter);
app.use("/api/order", orderRouter);

module.exports = app;
