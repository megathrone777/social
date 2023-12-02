"use client";
import React, { useState } from "react";

interface TProps {
  id: string;
  sendMessage: (id: string, message: string) => Promise<void>;
}

const Form: React.FC<TProps> = ({ id, sendMessage }) => {
  const [message, setMessage] = useState<string>("");

  const handleMessageChange = ({
    currentTarget,
  }: React.SyntheticEvent<HTMLInputElement>): void => {
    setMessage(currentTarget.value);
  };

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>): void => {
    event.preventDefault();
    sendMessage(id, message);
    setMessage("");
  };

  return (
    <form action="#" method="POST" onSubmit={handleSubmit}>
      <input
        onChange={handleMessageChange}
        placeholder="Message..."
        type="text"
        value={message}
      />
      <button type="submit">Send message</button>
    </form>
  );
};

export { Form };
