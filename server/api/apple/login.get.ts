import appleSignin from "apple-signin-auth";

const options = {
  clientID: "com.company.app", // Apple Client ID
  redirectUri: "http://localhost:3000/apple/callback",
  // OPTIONAL
  state: "state", // optional, An unguessable random string. It is primarily used to protect against CSRF attacks.
  responseMode: "query" as "query" | "fragment" | "form_post", // Force set to form_post if scope includes 'email'
  scope: "email", // optional
};

export default defineEventHandler(async event => {
  const authorizationUrl = appleSignin.getAuthorizationUrl(options);
  console.log(authorizationUrl);

  event.node.res.statusCode = 302;
  event.node.res.setHeader("Location", authorizationUrl);
  event.node.res.end();
});