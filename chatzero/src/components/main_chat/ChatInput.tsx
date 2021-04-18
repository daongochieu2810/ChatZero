import React, { useContext, useEffect } from "react";
import { ChangeEvent, useState } from "react";
import { Box, Textarea, IconButton, HStack } from "@chakra-ui/react";
import { RiSendPlaneLine as SendIcon } from "react-icons/ri";
import { GoPlus as PlusIcon } from "react-icons/go";
import MessagingService from "../../data/services/MessagingService";
import { CurrentChatContext, CurrentChatContextData } from "./MainChat";

function ChatInput() {
  const currentChatContextData: CurrentChatContextData | undefined = useContext(
    CurrentChatContext
  );
  const {
    currentChatData,
    setCurrentChatData,
    currentChatMetaData,
  } = currentChatContextData!;
  const [message, setMessage] = useState<string>("");
  const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let inputMessage = e.target.value;
    setMessage(inputMessage ? inputMessage : "");
  };

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
            MessagingService.sendMessage(message);
            currentChatData?.messages.push({
              sender: currentChatMetaData!.person1,
              receiver: currentChatMetaData!.person2,
              receivedAt: new Date().getMilliseconds(),
              sentAt: new Date().getMilliseconds(),
              text: message,
            });
            setCurrentChatData({ ...currentChatData! });
          }}
        />
      </HStack>
    </Box>
  );
}

export default ChatInput;
