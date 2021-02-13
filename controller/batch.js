const Batch = require("../model/Batch");

//a producer can add a new batch
exports.addBatch = (req, res) => {
  const {
    body: { number, size, color, quantity },
  } = req;
  const batch = new Batch({
    number,
    size,
    color,
    quantity,
  });
  batch.save((error, batch) => {
    if (error) return res.send(error);
    res.json(batch);
  });
};

//a producer can show all the produced batches
exports.getAllBatches = (req, res) => {
  Batch.find({}).exec((error, batches) => {
    if (error) return res.send(error);
    res.json(batches);
  });
};
