const mongoose = require("mongoose");
const batchSchema = new mongoose.Schema({
  number: { type: Number, required: true, unique: true, min: 1 },
  size: { type: String, required: true, enum: ["S", "M", "L", "XL"] },
  color: {
    type: String,
    required: true,
    enum: ["red", "blue", "black", "green"],
  },
  quantity: { type: Number, required: true, min: 1 },
});
const batchModel = mongoose.model("Batch", batchSchema);
module.exports = batchModel;
