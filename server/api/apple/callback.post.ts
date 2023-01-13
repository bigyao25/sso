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
    app: {
      apple: { clientID },
    },
    sso: {
      apple: { teamID, keyIdentifier, privateKey },
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
  //   return { code: body.code, secret: clientSecret };

  const token = await appleSignin.getAuthorizationToken(body.code, {
    clientID,
    clientSecret,
    // redirectUri: "https://yaorui.test105.ascendex-sandbox.com/api/apple/token",
    redirectUri: "",
  });
  //   return token;

  event.node.res.setHeader("set-cookie", `id-token=${token.id_token}; Secure; HttpOnly`);
  event.node.res.setHeader("Location", "https://yaorui.test105.ascendex-sandbox.com/apple2/ok");
  event.node.res.statusCode = 302;
  event.node.res.end();
});
