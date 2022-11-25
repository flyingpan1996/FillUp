var express = require('express');

var router = express.Router();

const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    name: req.query.name,
    user: req.user,
    title: '',
  });
})





router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/gas',
    failureRedirect : '/gas'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/students');
});

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

module.exports = router;
