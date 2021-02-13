const Producer = require("../model/producer");
checkAuthorizedProducer = (req, res, next) => {
  Producer.find({})
    .then((producer) => {
      if (producer[0].userName == req.params.producerName) {
        console.log("you are an authorized person..");
        next();
      } else {
        res.status(500).send({
          message: "sorry,you are not authorized..",
        });
        return;
      }
    })
    .catch((err) => console.error(err));
};

module.exports = checkAuthorizedProducer;
