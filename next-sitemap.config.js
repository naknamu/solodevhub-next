/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://solodevhub.com/',
    generateRobotsTxt: true, // (optional)
    exclude: ['/server-sitemap.xml'], // <= exclude here
    robotsTxtOptions: {
        additionalSitemaps: [
        `${process.env.SITE_URL || 'https://solodevhub.com/'}server-sitemap.xml`, // <==== Add here
        ],
    },
}