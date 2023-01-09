import { OAuth2Client } from "google-auth-library";

const CLIENT_ID = "389924773294-s7t01ql7g2jhd83lbo80d6t6inqfn1e1.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URL = "http://localhost:3000/dashboard";

function getOauth2Client() {
  const oAuth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);

  return oAuth2Client;
}

export default defineEventHandler(event => {
  const client = new OAuth2Client(CLIENT_ID);

  async function verify() {
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
    console.log(result.tokens);

    return { tokens: result.tokens };
  }

  verify().catch(console.error);
});
