import nc from 'next-connect';
import { isAdmin, isAuth } from '../../../../utils/auth';
import axios from 'axios';

const handler = nc();
handler.use(isAuth, isAdmin);

handler.get(async (req, res) => {
  try {
    const { data } = await axios.get(`${process.env.FLASK_API_URL}/products`);
    res.status(200).json(data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
});

handler.post(async (req, res) => {
  try {
    const formData = new FormData();
    formData.append('name', req.body.name);
    formData.append('price', req.body.price);
    formData.append('brand_id', req.body.brand_id);
    formData.append('category_id', req.body.category_id);
    formData.append('hours', req.body.hours);
    formData.append('serial_number', req.body.serial_number);

    if (req.files?.main_image) {
      formData.append('main_image', req.files.main_image);
    }
    if (req.files?.side_images) {
      req.files.side_images.forEach((image) => formData.append('side_images', image));
    }

    const { data } = await axios.post(`${process.env.FLASK_API_URL}/products`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    res.status(201).json(data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
});

export default handler;
