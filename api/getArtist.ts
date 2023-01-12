import type { VercelRequest, VercelResponse } from "@vercel/node";
import getArtistCall from "../lib/getArtistCall";

export default async (req: VercelRequest, res: VercelResponse) => {
  const id = req.query.id as string;

  if (!id) {
    res.statusCode = 400;
    res.send({ error: "bad request" });
    return;
  }

  try {
    const data = await getArtistCall(id);
    res.statusCode = 200;
    res.send(data);
  } catch (error) {
    res.statusCode = 500;
    res.send({ error });
  }
};
