import React, { useState, useEffect } from "react";
import { Message } from "../../utils/types";
import ChatInput from "./ChatInput";
import ChatItem from "./ChatItem";
import TopBar from "./TopBar";

function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([]);

  return (
    <div
      className="w-9/10 h-9/10 shadow-xl relative"
      style={{
        display: "flex",
        flexDirection: "column",
        flexFlow: "column nowrap",
      }}
    >
      <div className="flex-none w-full">
        <TopBar />
      </div>
      <div
        className="flex-auto w-full"
        style={{
          overflowY: "scroll",
        }}
      >
        {messages.map((item: Message, index: number) => (
          <ChatItem key={index} message={item} />
        ))}
      </div>
      <div className="flex-none w-full">
        <ChatInput />
      </div>
    </div>
  );
}

export default ChatBox;
