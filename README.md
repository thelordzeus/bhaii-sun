# Bhaii sun 

"Bhai Sunn" is an innovative app that combines the power of ChatSonic API and Twilio WhatsApp Bot SDK to bring the advanced language capabilities of ChatGPT to WhatsApp. This app makes it easy to access the natural language processing and conversation skills of ChatGPT directly from your WhatsApp chats. Whether you're looking to get quick answers to questions, automate routine tasks, or just have a conversation with an AI, Bhai Sunn is the app for you. With Bhai Sunn, you can enjoy the benefits of a virtual assistant that is always available, 24/7. Download now and experience the future of messaging.


## Usage

- Setup your account and generate api keys for [Twillio what's app sandbox](https://console.twilio.com/us1/develop/sms/settings/whatsapp-sandbox?frameUrl=%2Fconsole%2Fsms%2Fwhatsapp%2Fsandbox%3Fx-target-region%3Dus1) and [chatSonic API key](https://writesonic.com/chat)
- Click [here](https://console.twilio.com/us1/develop/sms/settings/whatsapp-sandbox?frameUrl=%2Fconsole%2Fsms%2Fwhatsapp%2Fsandbox%3Fx-target-region%3Dus1) to go to the whats app sandbox on twillio.
<img width="937" alt="Screenshot 2023-01-30 at 11 10 44 PM" src="https://user-images.githubusercontent.com/87523233/215554869-eb894baa-0082-4c4c-8d71-e06b5d9202e0.png">

- Connect to your sandbox by sending a WhatsApp message to the Twilio number on the page.
- Go to server.js file and paste your API keys. 
```javascript 
// Enter your twillio API details here 
const accountSid = "TWWILIO_ACCOUNT_SID";
const authToken = "TWILLIO_ACCOUNT_AUTH_TOKEN";

// Enter your chatSonic API details here. 
sdk.auth('CHAT_SONIC_API');
```
- Deploying your webhook
```shell
node server.js
```
- Copy the server URL generated and paste it in the sandbox configuration settings 
<img width="830" alt="Screenshot 2023-01-30 at 11 21 22 PM" src="https://user-images.githubusercontent.com/87523233/215554991-d567a0a8-76ce-41ad-8ccb-d8373eaaa995.png">

- Remember to add "/incoming" at the end of URL otherwise it wont work.
- And you have achieved a working chatGPT bot in your what's app inbox.
