var express = require('express');
var flash = require('express-flash');
var passport = require('passport')
  , FacebookStrategy = require('passport-facebook').Strategy;

var router = express.Router();

/** Facebook Authentication **/
router.get('/facebook', passport.authenticate('facebook'));
router.get('/facebook/callback', 
  passport.authenticate('facebook', { successRedirect: '/?res=success',
                                      failureRedirect: '/?res=fail' }));

/** Twitter Authentication **/
router.get('/twitter', passport.authenticate('twitter'));
router.get('/twitter/callback', 
  passport.authenticate('twitter', { successRedirect: '/?res=success2',
                                     failureRedirect: '/?res=fail2' }));

module.exports = router;