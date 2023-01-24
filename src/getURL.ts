const baseURL = "https://api.music.apple.com";

const getURL = (path: string, params?: Record<string, string>) => {
  const resourceURL = new URL(path, baseURL);
  if (params) {
    resourceURL.search = new URLSearchParams(params)
      .toString()
      .replace("%2C", ",");
  }
  return resourceURL;
};

export default getURL;
