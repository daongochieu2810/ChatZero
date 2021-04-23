import React, { createContext, useEffect, useState } from "react";
import { Box, Center, Text } from "@chakra-ui/react";

import ChatBox from "./ChatBox";
import { useAppSelector, useAppDispatch } from "../../data/redux/hooks";
import { CollectiveChatData, SingleChatData } from "../../utils/types";
import MessagingService from "../../data/services/MessagingService";
import { disableChatInit } from "../../data/redux/slices/ChatSlice";

function MainChat() {
  const dispatch = useAppDispatch();
  const collectiveChatData: CollectiveChatData | undefined = useAppSelector(
    (state) => state.chat.collectiveChatData
  );
  const activeChatIndex: number | undefined = useAppSelector(
    (state) => state.chat.activeChatIndex
  );

  useEffect(() => {
    if (activeChatIndex === undefined) {
      return;
    }
    const activeChatData: SingleChatData | undefined =
      collectiveChatData?.chatData[activeChatIndex];
    if (!activeChatData) {
      return;
    }
    console.log(activeChatData);
    if (activeChatData && !activeChatData.chat.isInit) {
      console.log(
        `Init socket connection for ${activeChatData.chat.person1.name} and ${activeChatData.chat.person2.name}`
      );
      MessagingService.initSocketStream(
        activeChatData.chat.person1,
        activeChatData.chat.person2
      );
      dispatch(disableChatInit(activeChatIndex));
    }
  }, [activeChatIndex]);

  return (
    <Box className="h-full mobile:w-full tablet:w-8/12 desktop:w-6/12">
      <Center className="h-full w-full">
        {activeChatIndex !== undefined ? (
          <ChatBox />
        ) : (
          <Text>Choose a chat to get started</Text>
        )}
      </Center>
    </Box>
  );
}

export default MainChat;
