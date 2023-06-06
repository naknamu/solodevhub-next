import config from "@/config/config";

export async function getData(postid) {
  const response = await fetch(`${config.apiUrl}/posts/${postid}`);
  const jsonData = await response.json();
  return jsonData;
}

export default async function handler(req, res) {
  const jsonData = await getData();
  res.status(200).json(jsonData);
}
