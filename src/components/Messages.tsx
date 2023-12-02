"use client";
import React from "react";

interface TProps {
  messages: string[];
}

const Messages: React.FC<TProps> = ({ messages }) => (
  <div>
    {messages && !!messages.length && (
      <ul>
        {messages.slice(1).map(
          (message: string, index: number): React.ReactElement => (
            <li key={`${message}-${index}`}>{message}</li>
          )
        )}
      </ul>
    )}
  </div>
);

export { Messages };
