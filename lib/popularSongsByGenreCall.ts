import getHeaders from "../src/getHeaders";
import getURL from "../src/getURL";

const popularSongsByGenreCall = async (genreId: string) => {
  const headers = getHeaders();
  const requestURL = getURL("/v1/catalog/us/charts", {
    types: "songs",
    chart: "most-played",
    limit: "50",
    genre: genreId,
  }).href;
  console.log(requestURL);
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

export default popularSongsByGenreCall;
