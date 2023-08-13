const express = require("express");
const mongoose = require("mongoose");
const shortid = require("shortid");
const allRouter = require("./routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/", allRouter);
app.use("/all", allRouter);

mongoose
  .connect("mongodb://localhost/url-shortener", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
