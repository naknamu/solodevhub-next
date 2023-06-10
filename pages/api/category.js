import config from "@/config/config";

export const runtime = 'edge';

export async function getCategoryBySlug(slug) {
  const response = await fetch(`${config.apiUrl}/categories/${slug}`);
  const jsonData = await response.json();
  return jsonData;
}

export default async function handler(req, res) {
  const jsonData = await getData();
  res.status(200).json(jsonData);
}
