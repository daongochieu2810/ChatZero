import { Box } from "@chakra-ui/react";
import ChatInput from "./ChatInput";

function ChatBox() {
  return (
    <Box className="w-full h-full shadow-xl relative" backgroundColor="white">
      <ChatInput />
    </Box>
  );
}

export default ChatBox;
