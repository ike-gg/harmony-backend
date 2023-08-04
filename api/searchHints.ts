import type { VercelRequest, VercelResponse } from "@vercel/node";
import searchHintsCall from "../lib/searchHintsCall";

export default async (req: VercelRequest, res: VercelResponse) => {
  const query = req.query.query as string;
  const headers = req.headers;

  if (!query) {
    res.statusCode = 400;
    res.send({ error: "bad request" });
    return;
  }

  try {
    const data = await searchHintsCall(query);
    res.statusCode = 200;
    res.send({ ...data, ...headers });
  } catch (error) {
    res.statusCode = 500;
    res.send({ error });
  }
};
