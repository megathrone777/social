"use server";
import { revalidatePath } from "next/cache";
import { redis, redisPublisher } from "~/redis";

export const sendMessage = async (id: string, message: string) => {
  await redis.rpush(`messages${id}`, message);
  redisPublisher.publish("channel", message);
  revalidatePath("/1");
};
