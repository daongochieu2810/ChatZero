import React, { useState, useEffect } from "react";
import { useAppSelector } from "../../data/redux/hooks";
import { CollectiveChatData, Message, SingleChatData } from "../../utils/types";
import ChatInput from "./ChatInput";
import ChatItem from "./ChatItem";
import TopBar from "./TopBar";

function ChatBox() {
  const collectiveChatData: CollectiveChatData | undefined = useAppSelector(
    (state) => state.chat.collectiveChatData
  );
  const activeChatIndex: number | undefined = useAppSelector(
    (state) => state.chat.activeChatIndex
  );
  const [activeChatData, setActiveChatData] = useState<
    SingleChatData | undefined
  >();

  useEffect(() => {
    if (activeChatIndex !== undefined) {
      setActiveChatData(collectiveChatData?.chatData[activeChatIndex]);
    }
  }, [activeChatIndex, collectiveChatData]);

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
        <TopBar currentChat={activeChatData?.chat} />
      </div>
      <div
        className="flex-auto w-full"
        style={{
          overflowY: "scroll",
        }}
      >
        {activeChatData?.messages.map((item: Message, index: number) => (
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
