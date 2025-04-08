import cookie from 'js-cookie';

/**
 * Function to parse cookies from the request headers
 * @param {Object} req - The Next.js request object
 * @returns {Object} - An object containing cookies
 */
export function parseCookies(req) {
  return cookie.parse(req ? req.headers.cookie || "" : document.cookie);
}
