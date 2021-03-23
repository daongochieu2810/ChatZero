import { useState, useEffect } from "react";
import { Message } from "../../types/chat";
import ChatInput from "./ChatInput";
import ChatItem from "./ChatItem";
import TopBar from "./TopBar";

function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([]);
  useEffect(() => {
    let _messages: Message[] = [];
    for (let i = 0; i < 10; i++) {
      _messages.push({
        content: "How are you",
        sender: {
          name: "Hieu",
          avatar: "hieu",
        },
        receiver: {
          name: "Hieu",
          avatar: "hieu",
        },
        sentTime: new Date().getMilliseconds(),
        receivedTime: new Date().getMilliseconds(),
      });
    }
    setMessages(_messages);
  }, []);

  return (
    <div
      className="w-full h-full shadow-xl relative"
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
        {messages.map((item: Message) => (
          <ChatItem message={item} />
        ))}
      </div>
      <div className="flex-none w-full">
        <ChatInput />
      </div>
    </div>
  );
}

export default ChatBox;
