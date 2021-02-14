export const config = {
  siteMeta: {
    title: "EBILAB Blog",
    teamName: "EBILAB Inc.",
    description: "RSS based blog for team EBILAB.",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://proud-grass-0af552f00.azurestaticapps.net"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "Company",
      href: "https://ebilab.jp",
    },
  ],
};
