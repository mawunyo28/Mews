import GNews from "@gnews-io/gnews-io-js";

const API_TOKEN = process.env.NEWS_API_KEY!;

export const client = new GNews(API_TOKEN);
