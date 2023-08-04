import type { VercelRequest, VercelResponse } from "@vercel/node";
import getMusicVideoCall from "../lib/getMusicVideoCall";
import verifyStorefront from "../src/verfiyStorefront";

export default async (req: VercelRequest, res: VercelResponse) => {
  const id = req.query.id as string;

  const countryCodeHeader = req.headers["x-vercel-ip-country"];
  const countryCode = verifyStorefront(countryCodeHeader?.toString());

  if (!id) {
    res.statusCode = 400;
    res.send({ error: "bad request" });
    return;
  }

  try {
    const data = await getMusicVideoCall(id, countryCode);
    res.statusCode = 200;
    res.send(data);
  } catch (error) {
    res.statusCode = 500;
    res.send({ error });
  }
};
