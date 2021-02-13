const mongoose = require("mongoose");
const producerSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true, match: /.+@.+\..+/ },
});

const producerModel = mongoose.model("Producer", producerSchema);
module.exports = producerModel;
