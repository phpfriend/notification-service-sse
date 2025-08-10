<?php
// publisher.php
$redis = new Redis();
$redis->connect(getenv('REDIS_HOST'), getenv('REDIS_PORT'));
$redis->publish('notifications', json_encode([
    'title' => 'New Notification',
    'message' => 'Hello from PHP!'
]));
echo "Notification sent.";
?>
