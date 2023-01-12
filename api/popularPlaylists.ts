import type { VercelRequest, VercelResponse } from "@vercel/node";
import popularPlaylistsCall from "../lib/popularPlaylistsCall";

export default async (req: VercelRequest, res: VercelResponse) => {
  try {
    const data = await popularPlaylistsCall();
    res.statusCode = 200;
    res.send(data);
  } catch (error) {
    res.statusCode = 500;
    res.send({ error });
  }
};
