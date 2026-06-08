import { client } from "./gnews";

export const getTopHeadlines = async () => {
  return client.topHeadlines({ lang: "en", country: "us" });
};
