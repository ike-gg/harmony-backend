import type { VercelRequest, VercelResponse } from "@vercel/node";
import popularSongsCall from "../lib/popularSongsCall copy";

export default async (req: VercelRequest, res: VercelResponse) => {
  try {
    const data = await popularSongsCall();
    res.statusCode = 200;
    res.send(data);
  } catch (error) {
    res.statusCode = 500;
    res.send({ error });
  }
};
