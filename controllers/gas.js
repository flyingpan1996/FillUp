const Gas = require('../models/gas');



function index(req, res, next) {
  // Make the query object to use with Student.find based up
  // the user has submitted the search form or now
  const modelQuery = req.query.name ? { name: new RegExp(req.query.name, 'i') } : {};
  // Default to sorting by name
  Gas.find(modelQuery)
    .exec(function (err, gas) {
      if (err) return next(err);
      // Passing search values, name & sortKey, for use in the EJS
      res.render('gas/index', {
        name: req.query.name,
        user: req.user,
        gas,
        title: 'Gas Station',
      });
    });
}






function show(req, res, next) {
  Gas.findById(req.params.id, function(err, gas) {
     res.render('gas/show', {
      name: req.query.name,
      user: req.user,
      gas,
      title: 'Gas Detail',
    });
  });
}
 
 function newGas(req, res, next) {
   res.render('gas/new', {
    name: req.query.name,
    user: req.user,
    title: 'Add Gas Station',
  });
};




function create(req, res, next) {
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
