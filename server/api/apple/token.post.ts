type CallRes = {
  state: string;
  code: string;
  id_token: string;
};

export default defineEventHandler(async event => {
  const body = (await readBody(event)) as CallRes;
  //   return body;

  event.node.res.setHeader("Set-Cookie", `token=${body.id_token}; Secure; HttpOnly`);
  event.node.res.setHeader("Location", "https://yaorui.test105.ascendex-sandbox.com/apple2/ok");
  event.node.res.statusCode = 302;
  event.node.res.end();
});
