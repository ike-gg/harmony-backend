import getHeaders from "../src/getHeaders";
import getURL from "../src/getURL";

const getPlaylistCall = async (playlistId: string) => {
  const headers = getHeaders();
  const requestURL = getURL(`/v1/catalog/us/playlists/${playlistId}`).href;
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

export default getPlaylistCall;
