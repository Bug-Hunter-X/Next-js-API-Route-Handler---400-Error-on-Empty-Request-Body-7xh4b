```javascript
// pages/api/hello.js
export default function handler(req, res) {
  // Check if the request method is POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // Check if the request body is empty
  if (!req.body) {
    return res.status(400).json({ message: 'Bad Request' });
  }

  // Access the data from the request body
  const { name } = req.body;

  // Validate the name
  if (!name || name.length === 0) {
    return res.status(400).json({ message: 'Name is required' });
  }

  // Return a JSON response
  res.status(200).json({ name: name });
}
```