import getHeaders from "../src/getHeaders";
import getURL from "../src/getURL";

const getSongCall = async (songId: string) => {
  const headers = getHeaders();
  const requestURL = getURL(`/v1/catalog/us/songs/${songId}`).href;
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

export default getSongCall;
