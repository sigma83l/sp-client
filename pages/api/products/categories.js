import nc from 'next-connect';
import { isAuth, isAdmin } from '../../../utils/auth';
import axios from 'axios';

const handler = nc();

handler.use(isAuth, isAdmin);

handler.get(async (req, res) => {
  const { categoryId } = req.query;

  try {
    const response = await axios.get(
      `${process.env.FLASK_API_URL}/products/by-category/${categoryId}`
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching products by category:', error);
    res.status(500).json({ error: 'Failed to fetch products by category' });
  }
});

export default handler;
