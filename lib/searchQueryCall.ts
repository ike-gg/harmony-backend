import getHeaders from "../src/getHeaders";
import getURL from "../src/getURL";

type SearchType = "albums" | "artists" | "songs" | "music-videos" | "playlists";

const searchQueryCall = async (query: string, types?: SearchType) => {
  const headers = getHeaders();
  const requestURL = getURL("/v1/catalog/us/search", {
    term: query,
    limit: types ? "25" : "10",
    types: types ? types : "albums,artists,songs,music-videos",
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

export default searchQueryCall;
