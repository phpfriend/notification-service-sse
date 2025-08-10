# Notification Service (SSE + Redis)

A secure microservice for sending real-time notifications using Server-Sent Events (SSE) and Redis Pub/Sub.

## 🚀 Deploy to Railway
1. Sign up at https://railway.app and link your GitHub.
2. Click "New Project" → "Deploy from GitHub".
3. Select this repo.
4. Create a Redis service in Railway, copy the connection URL.
5. Add environment variables in Railway:
   - REDIS_URL=<your_redis_url>
   - SSE_PORT=3000
6. Deploy and note your public URL (e.g., `https://your-app.up.railway.app/stream`).

## 📜 License
MIT
