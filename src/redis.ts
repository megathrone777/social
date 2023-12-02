import { Redis, type RedisOptions } from "ioredis";

const options: RedisOptions = {
  host: "127.0.0.1",
  port: 6379,
};

const redis = new Redis(options);
const redisPublisher = new Redis(options);
const redisSubscriber = new Redis(options);

export { redis, redisPublisher, redisSubscriber };
