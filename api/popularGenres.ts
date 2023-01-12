import type { VercelRequest, VercelResponse } from "@vercel/node";
import popularGenresCall from "../lib/popularGenresCall";

export default async (req: VercelRequest, res: VercelResponse) => {
  try {
    const data = await popularGenresCall();
    res.statusCode = 200;
    res.send(data);
  } catch (error) {
    res.statusCode = 500;
    res.send({ error });
  }
};
