import nc from 'next-connect';
import axios from 'axios';
import cookie from 'js-cookie';

const handler = nc();

handler.post(async (req, res) => {
  try {
    const flaskBackendURL = process.env.FLASK_BACKEND_URL || 'http://34.42.157.189:5000';
    
    // Send registration data to Flask API
    const response = await axios.post(`${flaskBackendURL}/users/register`, req.body, { withCredentials: true });
    
    // Flask response with success
    const { access_token, refresh_token } = response.data;

    // Set cookies
    res.setHeader('Set-Cookie', [
      cookie.serialize('access_token_cookie', access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'Strict',
        path: '/',
      }),
      cookie.serialize('refresh_token_cookie', refresh_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'Strict',
        path: '/',
      }),
    ]);

    return res.status(200).json({ message: 'User registered successfully' });

  } catch (error) {
    return res.status(error.response?.status || 500).json({ error: error.response?.data?.error || 'Registration failed' });
  }
});

export default handler;