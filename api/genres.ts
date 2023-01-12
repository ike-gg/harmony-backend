import type { VercelRequest, VercelResponse } from "@vercel/node";
import genresCall from "../lib/genresCall";

export default async (req: VercelRequest, res: VercelResponse) => {
  try {
    const data = await genresCall();
    res.statusCode = 200;
    res.send(data);
  } catch (error) {
    res.statusCode = 500;
    res.send({ error });
  }
};
