const express = require('express');
const app = express();
var request = require('request');
const bodyParser = require('body-parser');
const sdk = require('api')('@writesonic/v2.2#4enbxztlcbti48j');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const accountSid = "TWWILIO_ACCOUNT_SID";
const authToken = "TWILLIO_ACCOUNT_AUTH_TOKEN";
const client = require('twilio')(accountSid, authToken);
sdk.auth('CHAT_SONIC_API');


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/incoming', async (req, res) => {
  const twiml = new MessagingResponse();
   let response;
    await sdk.chatsonic_V2BusinessContentChatsonic_post({
        enable_google_results: true,
        enable_memory: true,
        input_text: req.body.Body
      }, {engine: 'premium'})
        .then(({ data }) => {
            response = data.message;
        })
        .catch(err => {
            response = err;
        });
  console.log(response);
  await twiml.message(response);
  await res.writeHead(200, {'Content-Type': 'text/xml'});
  await res.end(twiml.toString());
  console.log("Message sent! ")
});

app.listen(3000, () => console.log('server started'));