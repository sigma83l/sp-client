import nc from 'next-connect';
import axios from 'axios';
import { signToken, isAuth } from '../../../utils/auth';

const handler = nc();
handler.use(isAuth);

handler.put(async (req, res) => {
  try {
    const flaskBackendURL = process.env.FLASK_BACKEND_URL || 'http://34.42.157.189:5000';

    // Extract cookies from request headers
    const cookies = cookie.parse(req.headers.cookie || '');
    const accessToken = cookies.access_token;

    if (!accessToken) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    // Send update request to Flask API
    const response = await axios.put(`${flaskBackendURL}/users`, req.body, {
      headers: {
        Cookie: `access_token=${accessToken}`,
      },
      withCredentials: true,
    });

    res.status(200).json(response.data);

  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.response?.data?.error || 'Failed to update user' });
  }
});

export default handler;
