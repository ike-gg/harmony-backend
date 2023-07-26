import getHeaders from "../src/getHeaders";
import getURL from "../src/getURL";

const getSongsISRCCall = async (isrcs: string[]) => {
  const isrcString = isrcs.slice(0, 25).join(",");

  const headers = getHeaders();
  const requestURL = getURL(`/v1/catalog/us/songs`, {
    "filter[isrc]": isrcString,
    include: "",
  }).href;
  try {
    const request = await fetch(requestURL, { headers: headers });

    console.log(request);

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

export default getSongsISRCCall;
