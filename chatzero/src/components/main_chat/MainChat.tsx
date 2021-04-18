import React, { createContext } from "react";
import { Box, Center, Text } from "@chakra-ui/react";

import ChatBox from "./ChatBox";
import { useAppSelector } from "../../data/redux/hooks";
import { SingleChat } from "../../utils/types";

export const CurrentChatContext = createContext<SingleChat | undefined>(
  undefined
);

function MainChat() {
  const currentChat: SingleChat | undefined = useAppSelector(
    (state) => state.chat.currentChat
  );

  return (
    <CurrentChatContext.Provider value={currentChat}>
      <Box className="h-full mobile:w-full tablet:w-8/12 desktop:w-6/12">
        <Center className="h-full w-full">
          {currentChat ? (
            <ChatBox />
          ) : (
            <Text>Choose a chat to get started</Text>
          )}
        </Center>
      </Box>
    </CurrentChatContext.Provider>
  );
}

export default MainChat;
