import Guardian from "guardian-js";

const API_KEY = process.env.NEWS_API_KEY!;

const guardian = new Guardian(API_KEY, true);

const showFields = "thumbnail,headline,trailText,byline";

export const getSections = async () => {
  // const data = await guardian.sections.search();

  const res = await fetch(
    `https://content.guardianapis.com/sections?api-key=${API_KEY}`,
    { next: { revalidate: 86400 } },
  );

  const data = await res.json();

  // console.log(JSON.stringify(data, null, 2));
  return data;
};

export const getBySection = async (section: string, pageSize = 30) => {
  const data = await guardian.content.search("", {
    showFields,
    pageSize,
    section,
    orderBy: "newest",
  });

  // console.log(JSON.stringify(data, null, 2));

  return data;
};

export const getAllContent = async (pageSize = 30) => {
  const data = await guardian.content.search("", {
    showFields,
    pageSize,
    orderBy: "newest",
  });

  return data;
};
