import fetch from 'node-fetch';

export const handler = async (event) => {
  const API_KEY = process.env.NEWS_API_KEY; // Set in environment variables
  const query = event.queryStringParameters.q || 'Marvel';

  const url = `https://newsdata.io/api/1/news?apikey=pub_e15051ca6e884ac1b4842fb0ef3652c7&q=marvel&language=en`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};