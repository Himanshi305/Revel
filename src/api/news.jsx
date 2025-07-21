import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=marvel+movies&language=en&sortBy=publishedAt&apiKey=2b2ef38f8a2644be865ce92abd45f9ff`,
      {
        headers: { "User-Agent": "VercelApp/1.0" }
      }
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching news:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch news" });
  }
}


