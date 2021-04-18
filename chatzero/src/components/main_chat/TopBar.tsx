import React from "react";
import { Box, Divider, Text, Image, HStack } from "@chakra-ui/react";
import { SingleChat } from "../../utils/types";

export interface TopBarProps {
  currentChat: SingleChat | undefined;
}

function TopBar({ currentChat }: TopBarProps) {
  return (
    <>
      <Box className="w-full">
        <HStack>
          <Image
            className="rounded-full h-icon w-icon m-2"
            src={currentChat?.person2.avatar}
          />
          <Text>{currentChat?.person2.name}</Text>
        </HStack>
      </Box>
      <Divider />
    </>
  );
}

export default TopBar;
