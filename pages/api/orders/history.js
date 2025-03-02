import axios from 'axios';
import nextConnect from 'next-connect';
import { onError } from '../../../utils/error';
import { isAuth } from '../../../utils/auth';

const handler = nextConnect({ onError });

handler.use(isAuth).get(async (req, res) => {
  try {
    const { userId } = req.query;

    const { data } = await axios.get(`${process.env.FLASK_API_URL}/cart/${userId}`, {
      headers: {
        Cookie: req.headers.cookie, 
      },
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.response?.data || 'Server error' });
  }
});
