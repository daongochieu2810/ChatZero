import React, { useEffect, useState } from "react";
import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import { useQuery } from "react-query";

import { useAppSelector, useAppDispatch } from "../../data/redux/hooks";
import { setCurrentChat } from "../../data/redux/slices/ChatSlice";
import FeedItem from "./FeedItem";
import UserService from "../../data/services/UserService";
import { User } from "../../utils/types";

function MainBrowser() {
  const currentChat = useAppSelector((state) => state.chat.currentChat);
  const dispatch = useAppDispatch();
  const [feeds, setFeeds] = useState<User[] | undefined>([]);
  const { data } = useQuery("/users", async () => {
    return await UserService.getUsers();
  });

  useEffect(() => {
    setFeeds(data);
  }, [data]);

  useEffect(() => {
    console.log(currentChat);
  }, [currentChat]);

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
        {feeds?.map((user: User) => (
          <FeedItem
            key={user.name}
            user={user}
            onClickCallback={() => {
              dispatch(
                setCurrentChat({
                  person1: feeds[0],
                  person2: feeds[1],
                  createdAt: new Date().getUTCMilliseconds(),
                })
              );
            }}
          />
        ))}
      </div>
    </Box>
  );
}

export default MainBrowser;
