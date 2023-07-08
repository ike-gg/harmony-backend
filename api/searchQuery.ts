import type { VercelRequest, VercelResponse } from "@vercel/node";
import searchQueryCall from "../lib/searchQueryCall";

type SearchType =
  | "albums"
  | "artists"
  | "songs"
  | "music-videos"
  | "playlists"
  | undefined;

export default async (req: VercelRequest, res: VercelResponse) => {
  const query = req.query.query as string;
  const types = req.query.types as SearchType;

  if (types) {
    if (
      types !== "albums" &&
      types !== "artists" &&
      types !== "songs" &&
      types !== "music-videos" &&
      types !== "playlists"
    ) {
      res.statusCode = 400;
      res.send({ error: "bad request" });
      return;
    }
  }

  if (!query) {
    res.statusCode = 400;
    res.send({ error: "bad request" });
    return;
  }

  try {
    const data = await searchQueryCall(query, types);
    res.statusCode = 200;
    res.send(data);
  } catch (error) {
    res.statusCode = 500;
    res.send({ error });
  }
};

// 19 04 56
