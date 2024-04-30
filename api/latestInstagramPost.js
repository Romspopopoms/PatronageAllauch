// /api/latestInstagramPost.js

import axios from 'axios';

export default async function handler(req, res) {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN; // Stockez votre token d'accès dans les variables d'environnement
  const endpoint = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink&access_token=${accessToken}`;

  try {
    const response = await axios.get(endpoint);
    const latestPost = response.data.data[0]; // Prend le premier post de la liste
    res.status(200).json(latestPost);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch Instagram post', error });
  }
}
