import { OAuth2Client } from "google-auth-library";

const CLIENT_ID = "389924773294-s7t01ql7g2jhd83lbo80d6t6inqfn1e1.apps.googleusercontent.com";
const client = new OAuth2Client(CLIENT_ID);

export default defineEventHandler(async event => {
  const origin = event.node.req.headers.origin || "https://www.ascendex.com";
  event.node.res.setHeader("Access-Control-Allow-Origin", origin);
  event.node.res.setHeader("Access-Control-Allow-Credentials", "true");
  event.node.res.setHeader("Access-Control-Allow-Method", "POST");
  event.node.res.setHeader("Access-Control-Allow-Headers", "content-type, authorization");

  const token = event.node.req.headers.authorization;
  console.log("authorization", token);

  if (!token) {
    return { message: "error" };
  }

  const idToken = token.split(" ")[1];
  console.log(222, idToken);

  const ticket = await client.verifyIdToken({
    idToken,
    audience: CLIENT_ID, // Specify the CLIENT_ID of the app that accesses the backend
    // Or, if multiple clients access the backend:
    //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
  });
  const payload = ticket.getPayload();
  if (payload) {
    const sub = payload["sub"];
    const email = payload["email"];
    return { sub, email };
  }

  return { message: "err2" };
});
