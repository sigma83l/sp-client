import nc from 'next-connect';
import axios from 'axios';
import { serialize } from 'js-cookie'; // don't forget this

const handler = nc();

handler.post(async (req, res) => {
  try {
    const flaskBackendURL = process.env.FLASK_BACKEND_URL || 'http://industrious-miracle-production.up.railway.app';
    const { email, password } = req.body;

    const response = await axios.post(`${flaskBackendURL}/login`, { email, password }, { withCredentials: true });

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
});

export default handler;
