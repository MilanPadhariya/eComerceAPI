const mongoose = require("mongoose");

const app = require("./app");

const DB =
  "mongodb+srv://milanPadhariya:UcHzl5uVZUXW0e1g@ecommerce.afjeh0d.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to eCommerce mongodb"));

const port = 4000;
app.listen(port, () => {
  console.log("server listening at port 4000");
});
