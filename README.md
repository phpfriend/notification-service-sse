# Notification Microservice (SSE + Redis)

This is a microservice for sending **real-time notifications** from PHP to the browser using **Server-Sent Events (SSE)** and Redis.

## Components
- **server.js**: Node.js SSE server
- **publisher.php**: PHP script to send notifications
- **Redis**: Pub/Sub backend

## Setup
1. Install dependencies:
   ```bash
   npm install express cors redis
   ```
2. Start Redis server.
3. Run `node server.js`.
4. Use `publisher.php` in your PHP application to send messages.

## Deployment
You can deploy this to Railway, Render, or any VPS.

## Security
Use API keys or tokens to secure `/events` endpoint and Redis access.
