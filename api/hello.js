// api/hello.js
import { VercelRequest, VercelResponse } from '@vercel/node';

// Replace with your actual secret token or use environment variables
const AUTH_TOKEN = process.env.AUTH_TOKEN || 'mysecrettoken';

export default function handler(req: VercelRequest, res: VercelResponse) {
  const authHeader = req.headers.authorization;

  // if (!authHeader || !authHeader.startsWith('Bearer ')) {
  //   return res.status(401).json({ error: 'Missing or malformed Authorization header' });
  // }

  // const token = authHeader.split(' ')[1];

  // if (token !== AUTH_TOKEN) {
  //   return res.status(403).json({ error: 'Invalid token' });
  // }

  // Proceed with the protected logic
  return res.status(200).json({ message: 'Access granted to protected endpoint.' });
}
