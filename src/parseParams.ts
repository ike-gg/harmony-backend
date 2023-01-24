import { VercelRequestQuery } from "@vercel/node";

const parseParams = <T extends string[]>(
  query: VercelRequestQuery,
  supportedParams: T
): Record<T[number], string> => {
  const arrayedObject = Object.entries(query);
  const filteredArrayedObject = arrayedObject.filter((entry) => {
    const [key] = entry;
    if (supportedParams.includes(key)) return true;
    return false;
  });
  const parsedParameters = Object.fromEntries(filteredArrayedObject);
  //@ts-ignore
  return parsedParameters;
};

export default parseParams;
