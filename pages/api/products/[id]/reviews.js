// /api/products/[id]/reviews.js

import nextConnect from 'next-connect';
import axios from 'axios';

const handler = nextConnect();

// Fetch reviews for a product
handler.get(async (req, res) => {
  const { id } = req.query;

  try {
    const response = await axios.get(
      `${process.env.FLASK_API_URL}/reviews/${id}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
});

// Submit a review (authenticated users only)
handler.post(async (req, res) => {
  const { id } = req.query;
  const { rating, comment } = req.body;

  try {
    const response = await axios.post(
      `${process.env.FLASK_API_URL}/reviews/${id}`,
      { rating, comment },
      {
        headers: { Authorization: `Bearer ${req.user.token}` },
      }
    );
    res.status(201).json(response.data);
  } catch (error) {
    console.error('Error submitting review:', error);
    res.status(500).json({ error: 'Failed to submit review' });
  }
});

export default handler;
