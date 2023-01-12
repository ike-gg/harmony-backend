import getCurrentToken from "./tokenManager";

const getHeaders = () => {
  const currentToken = getCurrentToken();
  const headers: HeadersInit = {
    Authorization: `Bearer ${currentToken}`,
    Accept: "application/json",
  };

  return headers;
};

export default getHeaders;
