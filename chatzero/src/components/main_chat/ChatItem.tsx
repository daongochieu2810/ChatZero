import { Box, HStack, Text, Image } from "@chakra-ui/react";
import { Avatar } from "../../resources/Resources";
import { Message } from "../../../../common/types";

export interface ChatItemProps {
  message: Message;
}

function ChatItem({ message }: ChatItemProps) {
  return (
    <HStack className="m-5">
      <Image className="rounded-full h-icon w-icon m-2" src={Avatar} />
      <Box
        className="p-5 gradient-blue shadow-md"
        style={{ borderRadius: "0 5px 5px 5px" }}
      >
        <Text className="text-white">{message.text}</Text>
      </Box>
    </HStack>
  );
}

export default ChatItem;
