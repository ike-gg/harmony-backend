import getHeaders from "../src/getHeaders";
import getURL from "../src/getURL";

const getSongsCall = async (songsId: string[], storefront: string) => {
  const songsIdString = songsId.join(",");

  const headers = getHeaders();
  const requestURL = getURL(`/v1/catalog/${storefront}/songs`, {
    ids: songsIdString,
    include: songsId.length > 15 ? "" : "albums,artists",
  }).href;
  try {
    const request = await fetch(requestURL, { headers: headers });

    if (!request.ok) {
      throw new Error("Something went wrong...");
    }

    const response = await request.json();
    return response;
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong...");
  }
};

export default getSongsCall;
