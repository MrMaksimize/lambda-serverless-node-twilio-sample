'use strict';
const qs = require('querystring');
const twilio = require('twilio');

module.exports.receivesms= (event, context, callback) => {
  var resp = new twilio.TwimlResponse();
  resp.message(function() {
      this.body('The Robots are coming! Head for the hills!');
      this.media('https://farm8.staticflickr.com/7090/6941316406_80b4d6d50e_z_d.jpg');
  });

  const response = {
    statusCode: 200,
    body: resp.toString(),
    headers: {
        "Content-Type" : "text/xml"
    }
  };


  callback(null, response);
};
