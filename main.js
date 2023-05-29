const Redis = require('ioredis');

const configRedis = {
  host: 'localhost',
  port: 6379,
}

const redis = new Redis(configRedis);

(async () => {
  redis.set('server connect', 'ok');
  redis.get('server connect', (err, reply) => {
    console.log({ reply, err })
  })
})();