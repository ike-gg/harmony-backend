import type { VercelRequest, VercelResponse } from "@vercel/node";
import getStorefront from "../src/getStorefront";
import parseParams from "../src/parseParams";
import sendRequest from "../src/sendRequest";

export default async (req: VercelRequest, res: VercelResponse) => {
  const providedStorefront = String(req.headers.storefront);
  const storefront = getStorefront(providedStorefront);
  const parameters = parseParams(req.query, ["include"]);
  const { id } = req.query;

  const endpoint = `/v1/catalog/${storefront}/artists/${id}`;

  if (!id) {
    res.statusCode = 400;
    res.send({ error: "bad request" });
    return;
  }

  try {
    const data = await sendRequest(endpoint, { params: parameters });
    res.statusCode = 200;
    res.send(data);
  } catch (error) {
    res.statusCode = 500;
    res.send({ error: "internal error" });
  }
};
