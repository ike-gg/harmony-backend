import type { VercelRequest, VercelResponse } from "@vercel/node";
import getStorefrontsCall from "../lib/getStoreFrontCall";

export default async (req: VercelRequest, res: VercelResponse) => {
  try {
    const data = await getStorefrontsCall();
    res.statusCode = 200;
    res.send(data);
  } catch (error) {
    res.statusCode = 500;
    res.send({ error });
  }
};
