export default function handler(req, res) {
  const authHeader = req.headers.authorization;

  // Replace with your actual secret token
  const SECRET_TOKEN = process.env.SECRET_BEARER_TOKEN || 'my-secret-token';

  // Check for Authorization header
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Missing or invalid Authorization header' });
  }

  // Extract the token
  const token = authHeader.split(' ')[1];

  // Validate token
  if (token !== SECRET_TOKEN) {
    return res.status(403).json({ error: 'Forbidden: Invalid token' });
  }

  // Token is valid
  return res.status(200).json({ message: 'Authenticated successfully!' });
}
