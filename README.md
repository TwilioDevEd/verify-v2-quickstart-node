<a href="https://www.twilio.com">
  <img src="https://static0.twilio.com/marketing/bundles/marketing/img/logos/wordmark-red.svg" alt="Twilio" width="250" />
</a>

# Twilio Verify Quickstart with Twilio, Node.js, and Express

![](https://github.com/TwilioDevEd/verify-v2-quickstart-node/workflows/Node.js/badge.svg)

> We are currently in the process of updating this sample template. If you are encountering any issues with the sample, please open an issue at [github.com/twilio-labs/code-exchange/issues](https://github.com/twilio-labs/code-exchange/issues) and we'll try to help you.

[Read the full quickstart here](https://www.twilio.com/docs/verify/api-beta/quickstarts/node-express)!

## Local development

To run this project on your computer you will need to download and install [Node.js](http://nodejs.org/).

You will also need to [sign up for a Twilio account](https://www.twilio.com/try-twilio)
if you don't have one already.

1. First clone this repository and `cd` into it.

   ```bash
   $ git clone git@github.com:TwilioDevEd/verify-v2-quickstart-node.git
   $ cd verify-v2-quickstart-node
   ```

1. Next, open `.env.example` at the root of the project and update it with
   values from your
   [Twilio account](https://www.twilio.com/console)
   and local configuration. Save the file as `.env`.  You'll need to set
   `TWILIO_AUTH_TOKEN`, `TWILIO_ACCOUNT_SID`, and `VERIFICATION_SID`.

   For the `VERIFICATION_SID` variable you'll need to provision a [Verification Service](https://www.twilio.com/console/verify/services) 
   
1. Navigate to the project directory in your terminal and run:

      ```bash
      $ npx yarn
      ```

    This should install all of our project dependencies from npm into a local
    `node_modules` folder.

1. Run the web app.

    ```bash
    $ npx yarn start
    ```

## Meta

* No warranty expressed or implied. Software is as is. Diggity.
* The CodeExchange repository can be found [here](https://github.com/twilio-labs/code-exchange/).
* [MIT License](http://www.opensource.org/licenses/mit-license.html)
* Lovingly crafted by Twilio Developer Education.
