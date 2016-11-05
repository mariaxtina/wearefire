const environment = require('../environments');
const client = require('twilio')(environment.TWILIO_ACCOUNT_SID, environment.TWILIO_AUTH_TOKEN);

export function sendSms(phoneNumber, message) {
  client.sms.messages.post({
      to: '+16515559999',
      from: environment.TWILIO_NUMBER,
      body: message,
  }, function(err, text) {
      console.log('You sent: '+ text.body);
      console.log('Current status of this text message is: '+ text.status);
  });
}
