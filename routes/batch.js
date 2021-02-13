const batchController = require("../controller/batch");
const express = require("express");
const verifyProducer = require("../middleware/verifyProducer");
const app = express();
const router = express.Router();

//add a new batch
router.post("/add/:producerName", verifyProducer, batchController.addBatch);

//get all batches
router.get("/:producerName", verifyProducer, batchController.getAllBatches);

module.exports = router;
