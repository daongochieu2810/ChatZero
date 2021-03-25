import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import FeedItem from "./FeedItem";

const feeds = [0, 1, 2, 3];
function MainBrowser() {
  return (
    <Box className="h-full w-4/12">
      <SimpleGrid
        className="w-full m-8 flex"
        spacingX="150px"
        spacingY="20px"
        minChildWidth="160px"
      >
        <Box className="flex-1">
          <Text className="text-5xl font-semibold">Chats</Text>
        </Box>
        <Box>
          <Button className="gradient-blue text-white hvr-grow" size="lg">
            Create new chat
          </Button>
        </Box>
      </SimpleGrid>
      <div>
        {feeds.map(() => (
          <FeedItem />
        ))}
      </div>
    </Box>
  );
}

export default MainBrowser;
