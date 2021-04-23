import React, { useEffect, useState, ChangeEvent } from "react";
import { Box, Textarea, IconButton, HStack } from "@chakra-ui/react";
import { RiSendPlaneLine as SendIcon } from "react-icons/ri";
import { GoPlus as PlusIcon } from "react-icons/go";
import MessagingService from "../../data/services/MessagingService";
import {
  CollectiveChatData,
  SingleChat,
  SingleChatData,
} from "../../utils/types";
import { useAppDispatch, useAppSelector } from "../../data/redux/hooks";
import { addMessage } from "../../data/redux/slices/ChatSlice";

function ChatInput() {
  const urlParams = new URLSearchParams(window.location.search);
  let isSwitch = urlParams.get("switch");
  const dispatch = useAppDispatch();

  const [isCallbackSet, setIsCallbackSet] = useState<boolean>(false);
  const collectiveChatData: CollectiveChatData = useAppSelector(
    (state) => state.chat.collectiveChatData
  );
  const activeChatIndex: number = useAppSelector(
    (state) => state.chat.activeChatIndex
  );

  const [message, setMessage] = useState<string>("");
  const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let inputMessage = e.target.value;
    setMessage(inputMessage ? inputMessage : "");
  };

  useEffect(() => {
    if (activeChatIndex !== undefined) {
      setMessage("");
      if (collectiveChatData.chatData[activeChatIndex].chat.isInit) {
        return;
      }
      const activeChat: SingleChat = collectiveChatData.chats[activeChatIndex];
      console.log("Setting up callback on receiving messages...");
      MessagingService.setReceiveMessageCallback(
        activeChat.person1,
        activeChat.person2,
        (_message: any) => {
          dispatch(addMessage({ content: _message }));
        }
      );
    }
  }, [activeChatIndex]);

  return (
    <Box className="w-full px-5 pb-5">
      <HStack className="w-full pt-2 pl-2 border-t-2">
        <IconButton
          className="hvr-grow gradient-blue"
          aria-label="utils-button"
          icon={<PlusIcon />}
          isRound
          color="white"
          size="lg"
        />
        <Textarea
          variant="unstyled"
          placeholder="Enter your message..."
          value={message}
          onChange={onMessageChange}
          style={{
            margin: "20px 20px 0 20px",
          }}
        />
        <IconButton
          className="hvr-grow gradient-blue"
          aria-label="send-button"
          icon={<SendIcon />}
          isRound
          color="white"
          size="lg"
          onClick={() => {
            const activeChat: SingleChat =
              collectiveChatData.chats[activeChatIndex];
            MessagingService.sendMessage(
              activeChat.person1,
              activeChat.person2,
              message
            );
          }}
        />
      </HStack>
    </Box>
  );
}

export default ChatInput;
