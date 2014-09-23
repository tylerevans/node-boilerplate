var passport = require('passport')
  , FacebookStrategy = require('passport-facebook').Strategy;
var passport = require('passport')
  , TwitterStrategy = require('passport-twitter').Strategy;

var ids = {
	facebook: {
 		clientID: '602545809842792',
 		clientSecret: '6e6343ce8cff9b6acec00385858b5da9',
 		callbackURL: '/auth/facebook/callback'
	},
	twitter: {
 		consumerKey: 'RbfS3sRd0z3nnxBd5TchPal0Y',
 		consumerSecret: 'Jn4vM526cXLADR4z9Ensuj2JSdxeRpNWqLkuWtVznJM7qtIRPL',
 		callbackURL: "/auth/twitter/callback"
	}
}

/** Facebook Authentication **/
passport.use(new FacebookStrategy({
    clientID: ids.facebook.clientID,
    clientSecret: ids.facebook.clientSecret,
    callbackURL: ids.facebook.callbackURL
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(accessToken);
    console.log(profile);
    var user = {id:'11'};
    done(null, user);
    
  }
));
passport.serializeUser(function(user, done) {
  console.log(user);
  done(null, user.id);
});
passport.deserializeUser(function(id, done) {
  var user = {id:'11'};
  done(null, user.id);
}); 

/** Twitter Authentication **/
passport.use(new TwitterStrategy({
    consumerKey: ids.twitter.consumerKey,
    consumerSecret: ids.twitter.consumerSecret,
    callbackURL: ids.twitter.callbackURL
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(accessToken);
    console.log(profile);
    var user = {id:'11'};
    done(null, user);
    
  }
));

module.exports = ids