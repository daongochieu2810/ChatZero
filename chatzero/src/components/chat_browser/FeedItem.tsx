import React from "react";
import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { Avatar } from "../../resources/Resources";
import { User } from "../../utils/types";

export interface FeedItemProps {
  user: User;
  onClickCallback: () => void;
}

function FeedItem({ user, onClickCallback }: FeedItemProps) {
  return (
    <Box
      className="hvr-sweep-to-top w-full p-5 bg-white shadow-md my-5 cursor-pointer"
      onClick={onClickCallback}
    >
      <HStack>
        <Image className="rounded-full h-icon w-icon m-2" src={Avatar} />
        <VStack>
          <Text>{user.name}</Text>
          <Text>{user.description}</Text>
        </VStack>
      </HStack>
    </Box>
  );
}

export default FeedItem;
