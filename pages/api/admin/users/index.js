import nc from 'next-connect';
import axios from 'axios';
import { parseCookies } from '../../../utils/cookies';  // Utility to parse cookies

const handler = nc();

handler.get(async (req, res) => {
  try {
    const { access_token } = parseCookies(req);

    if (!access_token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // Make request to Flask API to fetch all users
    const response = await axios.get(`${process.env.FLASK_BACKEND_URL}/users`, {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    res.status(200).json(response.data);
  } catch (error) {
    return res.status(error.response?.status || 500).json({ error: 'Error fetching users' });
  }
});

export default handler;
