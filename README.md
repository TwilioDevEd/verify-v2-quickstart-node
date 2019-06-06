<a href="https://www.twilio.com">
  <img src="https://static0.twilio.com/marketing/bundles/marketing/img/logos/wordmark-red.svg" alt="Twilio" width="250" />
</a>

# Twilio Verify Quickstart with Twilio, Node.js, and Express

[![Build Status](https://travis-ci.org/TwilioDevEd/verify-v2-quickstart-node.svg?branch=master)](https://travis-ci.org/TwilioDevEd/verify-v2-quickstart-node)

[Read the full quickstart here](https://www.twilio.com/docs/verify/api-beta/quickstarts/node-express)!

## Local development

To run this project on your computer you will need to download and install [Node.js](http://nodejs.org/) and
 [yarn](https://www.npmjs.com/).

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
      $ yarn install
      ```

    This should install all of our project dependencies from npm into a local
    `node_modules` folder.

1. Run the web app.

    ```bash
    $ yarn start
    ```

## Meta

* No warranty expressed or implied. Software is as is. Diggity.
* [MIT License](http://www.opensource.org/licenses/mit-license.html)
* Lovingly crafted by Twilio Developer Education.
