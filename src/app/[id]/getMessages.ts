"use server";
import { revalidatePath } from "next/cache";
import { redis } from "~/redis";

export const getMessages = async (id: string) => {
  const messages = await redis.lrange(`messages${id}`, 0, -1);
  revalidatePath("/1");
  return messages;
};
