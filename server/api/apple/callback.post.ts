export default defineEventHandler(async event => {
  const body = await readBody(event);

  return JSON.stringify(body, null, 2);
});
