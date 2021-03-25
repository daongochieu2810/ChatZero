import { Box, Center } from "@chakra-ui/react";
import ChatBox from "./ChatBox";

function MainChat() {
  return (
    <Box className="h-full w-6/12">
      <Center className="h-full w-full">
        <ChatBox />
      </Center>
    </Box>
  );
}

export default MainChat;
