import React from "react";
import { Box, HStack, Image } from "@chakra-ui/react";
import { Avatar } from "../../resources/Resources";

function FeedItem() {
  return (
    <Box className="w-full p-5 bg-white shadow-md my-5">
      <HStack>
        <Image className="rounded-full h-icon w-icon m-2" src={Avatar} />
      </HStack>
    </Box>
  );
}

export default FeedItem;
