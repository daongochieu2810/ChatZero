import React, { useEffect, useState, createContext } from "react";
import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import { useQuery } from "react-query";

import { useAppSelector, useAppDispatch } from "../../data/redux/hooks";
import {
  setCollectiveChatData,
  setActiveChatIndex,
  enableChatInit,
} from "../../data/redux/slices/ChatSlice";
import FeedItem from "./FeedItem";
import UserService from "../../data/services/UserService";
import { CollectiveChatData, SingleChat, User } from "../../utils/types";
import MessagingService from "../../data/services/MessagingService";

function MainBrowser() {
  const currentUser = useAppSelector((state) => state.user.currentUser);
  const activeChatIndex: number = useAppSelector(
    (state) => state.chat.activeChatIndex
  );
  const dispatch = useAppDispatch();
  const [feeds, setFeeds] = useState<User[] | undefined>([]);
  const { data } = useQuery("/users", async () => {
    return await UserService.getUsers();
  });

  useEffect(() => {
    let _collectiveChatData: CollectiveChatData = {
      chatData: [],
      chats: [],
    };

    setFeeds(data);
    if (data) {
      for (let user of data!) {
        const currChatMetaData: SingleChat = {
          id: MessagingService.generateRoomId(currentUser, user),
          person1: currentUser,
          person2: user,
          createdAt: new Date().getMilliseconds(),
          isInit: false,
        };
        _collectiveChatData.chats.push(currChatMetaData);
        _collectiveChatData.chatData.push({
          chat: currChatMetaData,
          messages: [],
          draftMessage: "",
        });
      }
      dispatch(setCollectiveChatData(_collectiveChatData));
      console.log(activeChatIndex);
      if (activeChatIndex !== undefined) {
        dispatch(enableChatInit(activeChatIndex));
      }
    }
  }, [data]);

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
        {feeds?.map((user: User, index: number) => (
          <FeedItem
            key={user.name}
            user={user}
            onClickCallback={() => {
              console.log(index);
              dispatch(setActiveChatIndex(index));
            }}
          />
        ))}
      </div>
    </Box>
  );
}

export default MainBrowser;
