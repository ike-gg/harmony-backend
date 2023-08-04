import getHeaders from "../src/getHeaders";
import getURL from "../src/getURL";

const popularAlbumsCall = async (storefront: string) => {
  const headers = getHeaders();
  const requestURL = getURL(`/v1/catalog/${storefront}/charts`, {
    types: "albums",
    limit: "45",
    chart: "most-played",
  }).href;
  try {
    const request = await fetch(requestURL, { headers: headers });

    if (!request.ok) {
      throw new Error("Something went wrong...");
    }

    const response = await request.json();
    return response;
  } catch (error) {
    throw new Error("Something went wrong...");
  }
};

export default popularAlbumsCall;
