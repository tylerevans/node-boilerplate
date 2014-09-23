var express = require('express');
var flash = require('express-flash');

var router = express.Router();

var mail = require('../mail');


// Database Stuff
var Sequelize = require('sequelize');
var async = require('async')
var q = require("q"),
  Q = require("q");

var sequelize = new Sequelize('newdb', 'root', 'root', {
  host: "localhost",
  port: 3306,
  dialect: 'mysql',
  dialectOptions: {
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
  },
  define: {
    underscored: false,
    freezeTableName: false,
    syncOnAssociation: true,
    charset: 'utf8',
    collate: 'utf8_general_ci',
    classMethods: {method1: function() {}},
    instanceMethods: {method2: function() {}},
    timestamps: true
  },
  sync: { force: true },
  syncOnAssociation: true
});



/* GET home page. */
router.get('/', function(req, res) {
  console.log(req.session);
  res.render('index', { title: 'Express', nav:'home' });
});

router.get('/about', function(req, res) {
  var animalDeferer = q.defer(),
    humanDeferer = q.defer();

  sequelize.query("SELECT * FROM animals").success(function(rows) {
     animalDeferer.resolve(rows);
  });

  sequelize.query("SELECT * FROM humans").success(function(rows) {
     humanDeferer.resolve(rows);
  });

  Q.all([animalDeferer.promise, humanDeferer.promise]).spread( function(animalsData, humansData) {
    res.render('about', { animals: animalsData, humans: humansData });
  });

});

router.get('/contact', function(req, res) {
	res.render('contact');
});

router.get('/auth', function(req,res) {
	res.render('auth');
});

router.post('/signup', function(req, res) {
	console.log(req.body);
	mail.init();
	mail.options(req.body.email);
	mail.sendMail();
	req.flash('info', 'Mail Sent.');
	res.redirect('/');
});

module.exports = router;
