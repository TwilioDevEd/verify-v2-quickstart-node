<a href="https://www.twilio.com">
  <img src="https://static0.twilio.com/marketing/bundles/marketing/img/logos/wordmark-red.svg" alt="Twilio" width="250" />
</a>

# Twilio Verify Quickstart with Twilio, Node.js, and Express

![](https://github.com/TwilioDevEd/verify-v2-quickstart-node/workflows/Node.js/badge.svg)

> This template is part of Twilio CodeExchange. If you encounter any issues with this code, please open an issue at [github.com/twilio-labs/code-exchange/issues](https://github.com/twilio-labs/code-exchange/issues).


## About

This application example demonstrates how to do simple phone verification with Nodejs and Twilio Verify.

[Read the full quickstart here](https://www.twilio.com/docs/verify/api-beta/quickstarts/node-express)!

Implementations in other languages:

| .NET | Java | Python | PHP | Ruby |
| :--- | :--- | :----- | :-- | :--- |
| [Done](https://github.com/TwilioDevEd/verify-v2-quickstart-csharp) | [Done](https://github.com/TwilioDevEd/verify-v2-quickstart-java)  | [Done](https://github.com/TwilioDevEd/verify-v2-quickstart-python)    | [Done](https://github.com/TwilioDevEd/verify-v2-quickstart-php) | [Done](https://github.com/TwilioDevEd/verify-v2-quickstart-rails)  |


## Set up

### Requirements

- [Nodejs](https://nodejs.org/) v10 or v12
- [Sqlite3](https://www.sqlite.org/)

### Twilio Account Settings

This application should give you a ready-made starting point for writing your own application.
Before we begin, we need to collect all the config values we need to run the application:

| Config Value | Description |
| :----------  | :---------- |
| TWILIO_ACCOUNT_SID / TWILIO_AUTH_TOKEN  | For Twilio API credentials find [here](https://www.twilio.com/console)|
| VERIFICATION_SID  | For Verification Service SID [here](https://www.twilio.com/console/verify/services) |

### Local development

1. First clone this repository and `cd` into it.

   ```bash
   git clone git@github.com:TwilioDevEd/verify-v2-quickstart-node.git
   cd verify-v2-quickstart-node
   ```

2. Install dependencies.

   ```bash
   npm install
   ```

3. Set your environment variables. Copy the `env.example` file and edit it.

    ```bash
    cp .env.example .env
    ```

    See [Twilio Account Settings](#twilio-account-settings) to locate the necessary environment variables.

4. Run the web app.

    ```bash
    npm start
    ```

5. The application should now be running on http://localhost:3000/, here you can
register a new user account and proceed with a phone verification.

That's it!

### Docker

If you have [Docker](https://www.docker.com/) already installed on your machine, you can use our `docker-compose.yml` to setup your project.

1. Make sure you have the project cloned.
2. Setup the `.env` file as outlined in the [Local Development](#local-development) steps.
3. Run `docker-compose up`.

### Tests

You can run the tests locally by typing:

```bash
npm test
```

### Cloud deployment

Additionally to trying out this application locally, you can deploy it to a variety of host services. Here is a small selection of them.

Please be aware that some of these might charge you for the usage or might make the source code for this application visible to the public. When in doubt research the respective hosting service first.

| Service                           |                                                                                                                                                                                                                           |
| :-------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Heroku](https://www.heroku.com/) | [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)                                                                                                                                       |

## Resources

- The CodeExchange repository can be found [here](https://github.com/twilio-labs/code-exchange/).

## Contributing

This template is open source and welcomes contributions. All contributions are subject to our [Code of Conduct](https://github.com/twilio-labs/.github/blob/master/CODE_OF_CONDUCT.md).

## License

[MIT](http://www.opensource.org/licenses/mit-license.html)

## Disclaimer

No warranty expressed or implied. Software is as is.

[twilio]: https://www.twilio.com
