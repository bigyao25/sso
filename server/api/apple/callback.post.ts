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
  const body = await readBody<CallbackRsp>(event);

  const {
    sso: {
      apple: { clientID, teamID, keyIdentifier, privateKey },
    },
  } = useRuntimeConfig();

  const options = {
    clientID,
    teamID,
    keyIdentifier,
    privateKey,
  };
  const clientSecret = appleSignin.getClientSecret(options);
  const token = await appleSignin.getAuthorizationToken(body.code, {
    clientID,
    clientSecret,
    redirectUri: "https://yaorui.test105.ascendex-sandbox.com/api/apple/token",
  });

  return token;
});
