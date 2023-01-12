import type { VercelRequest, VercelResponse } from "@vercel/node";
import popularAlbumsCall from "../lib/popularAlbumsCall";

export default async (req: VercelRequest, res: VercelResponse) => {
  try {
    const data = await popularAlbumsCall();
    res.statusCode = 200;
    res.send(data);
  } catch (error) {
    res.statusCode = 500;
    res.send({ error });
  }
};
