import type { VercelRequest, VercelResponse } from "@vercel/node";
import popularMusicVideosCall from "../lib/popularMusicVideosCall";

export default async (req: VercelRequest, res: VercelResponse) => {
  try {
    const data = await popularMusicVideosCall();
    res.statusCode = 200;
    res.send(data);
  } catch (error) {
    res.statusCode = 500;
    res.send({ error });
  }
};
