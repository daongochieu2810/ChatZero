import React, { useContext, useEffect } from "react";
import { Message } from "../../utils/types";
import ChatInput from "./ChatInput";
import ChatItem from "./ChatItem";
import { CurrentChatContext, CurrentChatContextData } from "./MainChat";
import TopBar from "./TopBar";

function ChatBox() {
  const currentChatContextData: CurrentChatContextData | undefined = useContext(
    CurrentChatContext
  );
  let { currentChatData, currentChatMetaData } = currentChatContextData!;

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
        <TopBar currentChat={currentChatMetaData} />
      </div>
      <div
        className="flex-auto w-full"
        style={{
          overflowY: "scroll",
        }}
      >
        {currentChatData?.messages.map((item: Message, index: number) => (
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
