import nc from 'next-connect';
import axios from 'axios';


const handler = nc();

handler.get(async (req, res) => {
  try {
    const flaskBackendURL = process.env.FLASK_BACKEND_URL || 'http://34.42.157.189:5000';
    
    // Send request to Flask API to fetch products
    const response = await axios.get(`${flaskBackendURL}/products`);
    
    // Send Flask response back to the client
    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(error.response?.status || 500).json({ error: error.response?.data?.error || 'Failed to fetch products' });
  }
});

export default handler;
