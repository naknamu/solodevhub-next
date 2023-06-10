import config from "@/config/config";

export const runtime = 'experimental-edge';

export async function getTagBySlug(slug) {
  const response = await fetch(`${config.apiUrl}/tags/${slug}`);
  const jsonData = await response.json();
  return jsonData;
}

export default async function handler(req, res) {
  const jsonData = await getData();
  res.status(200).json(jsonData);
}
