const Gas = require('../models/gas');


function create(req, res) {
  Gas.findById(req.params.id, function(err, gas) {
    gas.reviews.push(req.body);
    gas.save(function(err) {
      res.redirect(`/gas/${gas._id}`);
    });
  });
}

module.exports = {
    create
  };