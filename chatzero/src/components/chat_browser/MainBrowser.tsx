import React, { useEffect } from "react";
import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import { useQuery } from "react-query";
import FeedItem from "./FeedItem";
import ApiService from "../../data/redux/services/ApiService";
import UserService from "../../data/redux/services/UserService";

const feeds = [0, 1, 2, 3];
function MainBrowser() {
  const { data } = useQuery("/users", async () => {
    return await UserService.getUsers();
  });
  useEffect(() => {
    console.log(data);
  });
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
          <Button
            className="gradient-blue text-white hvr-grow"
            size="lg"
            onClick={() => {
              //console.log(new Date().getMilliseconds);
              /*ApiService.request({
                url: "/users",
                method: "GET",
              }).then((users: any) => {
                ApiService.request({
                  url: "/chat",
                  method: "POST",
                  data: {
                    person1: users[0],
                    person2: users[1],
                    createdAt: new Date().getMilliseconds(),
                  },
                }).then((response: any) => {
                  console.log(response);
                  ApiService.request({
                    url: "/chat",
                    method: "GET",
                  }).then((data: any) => {
                    console.log(data);
                  });
                });
              });*/
            }}
          >
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
