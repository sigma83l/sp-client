import nc from 'next-connect';
import axios from 'axios';
import { isAuth, isAdmin } from '../../../utils/auth';
import { onError } from '../../../utils/error';

const handler = nc({ onError });

handler.use(isAuth, isAdmin);

handler.get(async (req, res) => {
  const { brandId } = req.query;

  try {
    const response = await axios.get(
      `${process.env.FLASK_API_URL}/products/by-brand/${brandId}`
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching products by brand:', error);
    res.status(500).json({ error: 'Failed to fetch products by brand' });
  }
});

export default handler;