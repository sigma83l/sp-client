import nc from 'next-connect';
import { isAdmin, isAuth } from '../../../../../utils/auth';
import axios from 'axios';
import { parseCookies } from '../../../../../utils/cookies';

const handler = nc();
handler.use(isAuth, isAdmin);

handler.get(async (req, res) => {
  const { id } = req.query;
  try {
    const { access_token } = parseCookies(req);

    if (!access_token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const response = await axios.get(`${process.env.FLASK_BACKEND_URL}/users/${id}`, {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    res.status(200).json(response.data);
  } catch (error) {
    return res.status(error.response?.status || 500).json({ error: 'Error fetching user' });
  }
});

handler.put(async (req, res) => {
  try {
    const { access_token } = parseCookies(req);

    if (!access_token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    await axios.put(`${process.env.FLASK_BACKEND_URL}/users`, req.body, {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    res.status(200).json({ message: 'User Updated Successfully' });
  } catch (error) {
    return res.status(error.response?.status || 500).json({ error: 'Error updating user' });
  }
});

handler.delete(async (req, res) => {
  const { id } = req.query;
  try {
    const { access_token } = parseCookies(req);

    if (!access_token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    await axios.delete(`${process.env.FLASK_BACKEND_URL}/users/${id}`, {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    res.status(200).json({ message: 'User Deleted' });
  } catch (error) {
    return res.status(error.response?.status || 500).json({ error: 'Error deleting user' });
  }
});

export default handler;
