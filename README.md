# Next.js API Route Handler - 400 Error on Empty Request Body

This repository demonstrates a common error in Next.js API routes where a 400 Bad Request error is thrown when the request body is empty or missing required fields. The error message is not very descriptive, making it difficult to debug.

## Bug
The `pages/api/hello.js` file contains the buggy API route handler.  It attempts to access the `name` property directly from `req.body` without proper error handling.

## Solution
The `pages/api/hello.js` file is updated to include robust error handling for empty request bodies and missing `name` fields.  It now provides more descriptive error messages.