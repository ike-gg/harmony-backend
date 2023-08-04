import type { VercelRequest, VercelResponse } from "@vercel/node";
import getSongsCall from "../lib/getSongsCall";
import getSongsISRCCall from "../lib/getSongsISRCCall";
import verifyStorefront from "../src/verfiyStorefront";

export default async (req: VercelRequest, res: VercelResponse) => {
  const idsPlain = req.query.ids as string;
  const isISRC = req.query.isrc as string;

  const countryCodeHeader = req.headers["x-vercel-ip-country"];
  const countryCode = verifyStorefront(countryCodeHeader?.toString());

  const ids = idsPlain?.split(",");

  if (!ids || ids.length === 0) {
    res.statusCode = 400;
    res.send({ error: "bad request" });
    return;
  }

  try {
    let data: any;
    if (isISRC === "true") {
      data = await getSongsISRCCall(ids, countryCode);
    } else {
      data = await getSongsCall(ids, countryCode);
    }
    res.statusCode = 200;
    res.send(data);
  } catch (error) {
    res.statusCode = 500;
    res.send({ error });
  }
};
