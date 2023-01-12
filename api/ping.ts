import type { VercelRequest, VercelResponse } from "@vercel/node";

export default (req: VercelRequest, res: VercelResponse) => {
  console.log(req.query);
  res.statusCode = 200;
  res.send({ ok: "ok" });
};
