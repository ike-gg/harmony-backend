const baseURL = "https://api.music.apple.com";

const getURL = (path: string, params: Record<string, string>) => {
  const resourceURL = new URL(path, baseURL);
  resourceURL.search = new URLSearchParams(params).toString();
  return resourceURL;
};

export default getURL;
