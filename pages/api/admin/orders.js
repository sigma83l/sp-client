import axios from 'axios';
import nextConnect from 'next-connect';
import { isAuth, isAdmin } from '../../../utils/auth';

const handler = nextConnect();

handler.use(isAuth, isAdmin).get(async (req, res) => {
  try {
    const response = await axios.get(`${process.env.FLASK_API_URL}/cart`, {
      withCredentials: true, // Ensures cookies are sent with the request
      headers: {
        Cookie: req.headers.cookie || '', // Forward cookies from client request
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ message: error.response?.data?.error || 'Error fetching carts' });
  }
});

export default handler;