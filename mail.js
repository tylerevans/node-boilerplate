var nodemailer = require('nodemailer');

// create reusable transport method (opens pool of SMTP connections)

module.exports = {
	log: function() {
		console.log("Hi");
	},

	init: function() {
		smtpTransport = nodemailer.createTransport("SMTP",{
		    service: "Gmail",
		    auth: {
		        user: "tyler@vimcore.com",
		        pass: "moog2107!!"
		    }
		});
	},

	options: function(email) {
		mailOptions = {
		    from: "Tyler Evans <tyler@vimcore.com>", // sender address
		    to: email, // list of receivers
		    subject: "Hello", // Subject line
		    text: "Hello world", // plaintext body
		    html: "<b>Hello world</b>" // html body
		}
	},

	sendMail: function() {
		// send mail with defined transport object
		smtpTransport.sendMail(mailOptions, function(error, response){
		    if(error){
		        console.log(error);
		    }else{
		        console.log("Message sent: " + response.message);
		    }
		});
	}


}
