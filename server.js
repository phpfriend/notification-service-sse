const express = require('express');
const cors = require('cors');
const redis = require('redis');

const app = express();
app.use(cors());

const redisClient = redis.createClient({ url: process.env.REDIS_URL });
redisClient.connect();

app.get('/events', async (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    const subscriber = redisClient.duplicate();
    await subscriber.connect();
    await subscriber.subscribe('notifications', (message) => {
        res.write(`data: ${message}\n\n`);
    });
});

app.listen(3000, () => console.log('SSE server running on port 3000'));
