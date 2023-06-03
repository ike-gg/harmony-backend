import type { VercelRequest, VercelResponse } from "@vercel/node";
import getSongsCall from "../lib/getSongsCall";

export default async (req: VercelRequest, res: VercelResponse) => {
  const idsPlain = req.query.ids as string;

  const ids = idsPlain?.split(",").filter(Number);

  if (!ids || ids.length === 0) {
    res.statusCode = 400;
    res.send({ error: "bad request" });
    return;
  }

  try {
    const data = await getSongsCall(ids);
    res.statusCode = 200;
    res.send(data);
  } catch (error) {
    res.statusCode = 500;
    res.send({ error });
  }
};
