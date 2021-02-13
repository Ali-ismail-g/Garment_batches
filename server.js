const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Producer = require("./model/producer");
const batchRouter = require("./routes/batch");
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 5000;

//connecting to mongodb
mongoose
  .connect("mongodb://127.0.0.1:27017/garmentManufacturer", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to MongoDB.");
    initial();
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });
function initial() {
  console.log("data base is live...");
  let myProducer = new Producer({
    userName: "producer1",
    email: "producer@gmail.com",
  }).save((err) => {
    if (err) {
      console.log("error", err);
    } else console.log("myProducer was added to producers collection");
  });
}

//batches routes
app.use("/batch", batchRouter);

app.listen(PORT, () => console.log(`server is running on PORT ${PORT}`));
