import type { VercelRequest, VercelResponse } from "@vercel/node";
import searchHintsCall from "../lib/searchHintsCall";

export default async (req: VercelRequest, res: VercelResponse) => {
  const query = req.query.query as string;

  if (!query) {
    res.statusCode = 400;
    res.send("bad request");
    return;
  }

  try {
    const data = await searchHintsCall(query);
    res.statusCode = 200;
    res.send(data);
  } catch (error) {
    res.statusCode = 500;
    res.send({ error });
  }
};
