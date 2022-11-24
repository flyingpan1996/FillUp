const Gas = require('../models/gas');


function index(req, res) {
  Gas.find({}, function (err, gas) {
    res.render('gas/index', { title: 'All Gas Stations', gas });
  });
}

function show(req, res) {
 Gas.findById(req.params.id, function(err, gas) {
    res.render('gas/show', { title: 'Gas Detail', gas });
  });
}

function newGas(req, res) {
  res.render('gas/new', { title: 'Add Gas Station' });
}



function create(req, res) {
  const gas = new Gas(req.body);
  gas.save(function(err) {
    // one way to handle errors
    if (err) return res.render('gas/new');
    console.log(gas);
    // for now, redirect right back to new.ejs
    res.redirect('/gas');
  });
}


function update(req, res){
  Gas.findByIdAndUpdate(req.params.id,
      {

      stationName: req.body.stationName,
      city: req.body.city,
      streetNumber: req.body.streetNumber,
      streetName: req.body.streetName,
      gasPrice: req.body.gasPrice,
      postalCode: req.body.postalCode
  },

  function(err, gas){
    
      if(err) console.log(err)
      res.redirect(`/gas/${gas._id}`);
  })
}

function deleteGas(req, res){
  Gas.findByIdAndDelete(req.params.id, function(err, gas){
      if(err) console.log(err);
      console.log('hi')
      res.redirect('/gas')
    
  });
}

module.exports = {
    index,
    show,
    new: newGas,
    create,
    update,
    delete: deleteGas
};
