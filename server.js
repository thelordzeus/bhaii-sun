const express = require('express');
const app = express();
var request = require('request');
const bodyParser = require('body-parser');
const sdk = require('api')('@writesonic/v2.2#4enbxztlcbti48j');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const accountSid = "ACf9c41fa582521fcaa6553d4de408d49c";
const authToken = "a703f4a607a5d4a9660cf880006f4502";
const client = require('twilio')(accountSid, authToken);
sdk.auth('b99a5754-2c49-4af5-a12f-4c8e3b5ee141');


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