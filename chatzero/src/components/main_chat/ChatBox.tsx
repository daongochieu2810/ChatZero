import { Box, Flex, VStack } from "@chakra-ui/react";
import ChatInput from "./ChatInput";
import ChatItem from "./ChatItem";
import TopBar from "./TopBar";

const messages = [1, 2, 3, 34, 4, 3, 3, 3, 3, 3, 3, 3];

function ChatBox() {
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
        {messages.map(() => (
          <ChatItem />
        ))}
      </div>
      <div className="flex-none w-full">
        <ChatInput />
      </div>
    </div>
  );
}

export default ChatBox;
