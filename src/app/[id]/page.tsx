import React from "react";

import { Form, Messages } from "~/components";
import { redisSubscriber } from "~/redis";
import { sendMessage } from "./sendMessage";
import { getMessages } from "./getMessages";
import { revalidatePath } from "next/cache";

const HomePage = async ({ params: { id } }: { params: { id: string } }) => {
  const messages1 = await getMessages("1");
  const messages2 = await getMessages("2");
  const messages = [...messages1, ...messages2];

  redisSubscriber.subscribe("channel");
  redisSubscriber.on("message", (_, message) => {
    console.log(message);
    revalidatePath("/[slug]", "page");
  });

  return (
    <main>
      <Form {...{ id, sendMessage }} />
      <Messages {...{ messages }} />
    </main>
  );
};

export default HomePage;
