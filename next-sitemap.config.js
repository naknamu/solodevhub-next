/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://solodevhub.com/",
  generateRobotsTxt: true, // (optional)
  exclude: ["/server-sitemap.xml"], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://solodevhub.com/server-sitemap.xml", // <==== Add here
    ],
  },
};
