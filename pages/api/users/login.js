import nc from 'next-connect';
import axios from 'axios';

const handler = nc();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const flaskBackendURL = process.env.FLASK_BACKEND_URL || 'http://34.42.157.189:5000';

    const { email, password } = req.body;

    const response = await axios.post(`${flaskBackendURL}/auth/login`, { email, password }, { withCredentials: true });

    const { access_token, refresh_token } = response.data;

    res.setHeader('Set-Cookie', [
      serialize('access_token', access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'Strict',
        path: '/',
      }),
      serialize('refresh_token', refresh_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'Strict',
        path: '/',
      }),
    ]);

    return res.status(200).json({ message: 'Login successful' });

  } catch (error) {
    return res.status(error.response?.status || 500).json({ error: error.response?.data?.error || 'Login failed' });
  }
}
