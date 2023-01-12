import type { VercelRequest, VercelResponse } from "@vercel/node";
import popularSongsByGenreCall from "../lib/popularSongsByGenreCall";

export default async (req: VercelRequest, res: VercelResponse) => {
  const genre = req.query.genre as string;

  if (!genre) {
    res.statusCode = 400;
    res.send("bad request");
    return;
  }

  try {
    const data = await popularSongsByGenreCall(genre);
    res.statusCode = 200;
    res.send(data);
  } catch (error) {
    res.statusCode = 500;
    res.send({ error });
  }
};
