import type { VercelRequest, VercelResponse } from "@vercel/node";
import popularAlbumsCall from "../lib/popularAlbumsCall";

export default async (req: VercelRequest, res: VercelResponse) => {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  try {
    const data = await popularAlbumsCall();
    res.statusCode = 200;
    res.send(data);
  } catch (error) {
    res.statusCode = 500;
    res.send({ error });
  }
};
