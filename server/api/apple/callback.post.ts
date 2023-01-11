import appleSignin from "apple-signin-auth";

type CallbackRsp = {
  state: string;
  code: string;
  user?: {
    name: {
      firstName: string;
      lastName: string;
    };
    email: string;
  };
};

/**
 * Callback from Apple server.
 */
export default defineEventHandler(async event => {
  const {
    sso: {
      apple: {
        public: { clientID },
        teamID,
        keyIdentifier,
        privateKey,
      },
    },
  } = useRuntimeConfig();

  const options = {
    clientID,
    teamID,
    keyIdentifier,
    privateKey,
  };
  const clientSecret = appleSignin.getClientSecret(options);
  console.log("clientSecret", clientSecret);

  const body = await readBody<CallbackRsp>(event);
  console.log("code", body.code);
  return { code: body.code, secret: clientSecret };
  const token = await appleSignin.getAuthorizationToken(body.code, {
    clientID,
    clientSecret,
    redirectUri: "https://yaorui.test105.ascendex-sandbox.com/api/apple/token",
  });

  return token;
});
