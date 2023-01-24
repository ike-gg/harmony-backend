import getHeaders from "../src/getHeaders";
import getURL from "../src/getURL";

interface Options {
  params?: Record<string, string>;
}

const sendRequest = async (endpoint: string, options: Options) => {
  const url = getURL(endpoint, options.params).href;
  console.log(url);
  try {
    const response = await fetch(url, { headers: getHeaders() });

    if (!response.ok) {
      throw new Error("Something went wrong...");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("something went wrong...");
  }
};

export default sendRequest;
