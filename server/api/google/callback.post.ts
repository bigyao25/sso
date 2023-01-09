import { OAuth2Client } from "google-auth-library";

// const REDIRECT_URL = "http://localhost/dashboard";
// const REDIRECT_URL = "http://localhost:3000/dashboard";
const REDIRECT_URL = "postmessage";
// const REDIRECT_URL = "https://ascendex.com/en/global-digital-asset-platform";

function getOauth2Client() {
  const { sso } = useRuntimeConfig();
  const {
    google: { clientId, clientSecret },
  } = sso;
  const oAuth2Client = new OAuth2Client(clientId, clientSecret, REDIRECT_URL);

  return oAuth2Client;
}

export default defineEventHandler(async event => {
  try {
    // code comes in the body
    const { code } = await readBody(event);

    // create a new OAuth2 client
    const client = getOauth2Client();

    // verify code and get tokens from it
    const result = await client.getToken(code);

    // result contains `access_token` and optional `refresh_token`
    // to use these credentials we can save them in the client
    client.setCredentials(result.tokens);

    // you can do whatever with the tokens
    return { tokens: result.tokens };
  } catch (error) {
    return { message: `cb:error`, error };
  }
});
