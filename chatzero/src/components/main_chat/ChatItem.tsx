import React from "react";
import cx from "classnames";
import { Box, HStack, Text, Image } from "@chakra-ui/react";
import { Avatar } from "../../resources/Resources";
import { Message, User } from "../../utils/types";
import { useAppSelector } from "../../data/redux/hooks";

export interface ChatItemProps {
  message: Message;
  sender: User;
}

function ChatItem({ message, sender }: ChatItemProps) {
  const currentUser: User = useAppSelector((state) => state.user.currentUser);
  return (
    <HStack
      className={cx("m-5 flex", {
        "justify-end": currentUser.name === sender.name,
      })}
    >
      {currentUser.name !== sender.name && (
        <Image className="rounded-full h-icon w-icon m-2" src={Avatar} />
      )}
      <Box
        className={cx("p-5 shadow-md", {
          "gradient-blue": currentUser.name !== sender.name,
        })}
        style={{
          borderRadius:
            currentUser.name !== sender.name
              ? "5px 0 5px 5px"
              : "0 5px 5px 5px",
        }}
      >
        <Text
          className={
            currentUser.name !== sender.name ? "text-white" : "text-blue-400"
          }
        >
          {message.content}
        </Text>
      </Box>
    </HStack>
  );
}

export default ChatItem;
