import React, { createContext, useEffect, useState } from "react";
import { Box, Center, Text } from "@chakra-ui/react";

import ChatBox from "./ChatBox";
import { useAppSelector } from "../../data/redux/hooks";
import { SingleChat, SingleChatData } from "../../utils/types";
import MessagingService from "../../data/services/MessagingService";

export interface CurrentChatContextData {
  currentChatMetaData: SingleChat | undefined;
  currentChatData: SingleChatData | undefined;
  setCurrentChatData: React.Dispatch<
    React.SetStateAction<SingleChatData | undefined>
  >;
}

export const CurrentChatContext = createContext<
  CurrentChatContextData | undefined
>(undefined);

function MainChat() {
  const currentChatMetaData: SingleChat | undefined = useAppSelector(
    (state) => state.chat.currentChat
  );
  const [currentChatData, setCurrentChatData] = useState<
    SingleChatData | undefined
  >();

  useEffect(() => {
    if (currentChatMetaData) {
      MessagingService.initSocketStream();
      MessagingService.setReceiveMessageCallback(() => {});
      setCurrentChatData({
        person1: currentChatMetaData!.person1,
        person2: currentChatMetaData!.person2,
        messages: [],
      });
    }
  }, [currentChatMetaData]);

  return (
    <CurrentChatContext.Provider
      value={{ currentChatMetaData, currentChatData, setCurrentChatData }}
    >
      <Box className="h-full mobile:w-full tablet:w-8/12 desktop:w-6/12">
        <Center className="h-full w-full">
          {currentChatMetaData ? (
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
