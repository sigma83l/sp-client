import nc from 'next-connect';
import axios from 'axios';

const handler = nc();

handler.get(async (req, res) => {
  try {
    const { id } = req.query;
    const response = await axios.get(`${process.env.FLASK_API_URL}/reviews/${id}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ message: error.response?.data?.error || 'Error fetching reviews' });
  }
});

export default handler;
