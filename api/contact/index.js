module.exports = async function (context, req) {
  if (req.method === "OPTIONS") {
    context.res = { status: 204 };
    return;
  }

  context.res = {
    status: 200,
    headers: { "Content-Type": "application/json" },
    body: { ok: true, message: "Contact API is reachable." }
  };
};
