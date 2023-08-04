import type { VercelRequest, VercelResponse } from "@vercel/node";
import popularMusicVideosCall from "../lib/popularMusicVideosCall";
import verifyStorefront from "../src/verfiyStorefront";

export default async (req: VercelRequest, res: VercelResponse) => {
  const countryCodeHeader = req.headers["x-vercel-ip-country"];
  const countryCode = verifyStorefront(countryCodeHeader?.toString());
  try {
    const data = await popularMusicVideosCall(countryCode);
    res.statusCode = 200;
    res.send(data);
  } catch (error) {
    res.statusCode = 500;
    res.send({ error });
  }
};
