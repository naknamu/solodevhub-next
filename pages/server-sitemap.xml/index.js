// pages/server-sitemap.xml/index.tsx
import { getServerSideSitemapLegacy } from 'next-sitemap'
import config from "@/config/config";

export const runtime = 'edge';

export const getServerSideProps = async (ctx) => {
  // Method to source urls from cms
  const response = await fetch(`${config.apiUrl}/posts/published`);

  const data = await response.json();
  const fields = data.map((item) => ({
    loc: `${process.env.SITE_URL || 'https://solodevhub.com'}/posts/${item.slug}`,
    lastmod: item.updatedAt,
    priority: 0.8,
    changefreq: "monthly",
  }));

  return getServerSideSitemapLegacy(ctx, fields)
}

// Default export to prevent next.js errors
export default function SitemapIndex() {}