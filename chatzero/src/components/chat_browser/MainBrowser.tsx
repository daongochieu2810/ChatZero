import React from "react";
import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import FeedItem from "./FeedItem";

const feeds = [0, 1, 2, 3];
function MainBrowser() {
  return (
    <Box className="mobile:hidden tablet:block desktop:block h-full w-4/12">
      <SimpleGrid
        className="w-full m-8 flex"
        spacingX="100px"
        spacingY="20px"
        minChildWidth="180px"
      >
        <Box className="flex-1">
          <Text className="text-5xl font-semibold">Chats</Text>
        </Box>
        <Box>
          <Button className="gradient-blue text-white hvr-grow" size="lg">
            <Text className="mr-2 text-2xl">+</Text> Create new chat
          </Button>
        </Box>
      </SimpleGrid>
      <div>
        {feeds.map((index: number) => (
          <FeedItem key={index} />
        ))}
      </div>
    </Box>
  );
}

export default MainBrowser;
