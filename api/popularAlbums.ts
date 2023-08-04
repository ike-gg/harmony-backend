import type { VercelRequest, VercelResponse } from "@vercel/node";
import popularAlbumsCall from "../lib/popularAlbumsCall";
import verifyStorefront from "../src/verfiyStorefront";

export default async (req: VercelRequest, res: VercelResponse) => {
  const countryCodeHeader = req.headers["x-vercel-ip-country"];
  const countryCode = verifyStorefront(countryCodeHeader?.toString());

  try {
    const data = await popularAlbumsCall(countryCode);
    res.statusCode = 200;
    res.send(data);
  } catch (error) {
    res.statusCode = 500;
    res.send({ error });
  }
};
