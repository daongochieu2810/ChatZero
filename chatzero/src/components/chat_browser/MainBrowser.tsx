import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  SimpleGrid,
  Text,
  Modal,
  ModalOverlay,
  ModalFooter,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useQuery } from "react-query";

import { useAppSelector, useAppDispatch } from "../../data/redux/hooks";
import {
  setCollectiveChatData,
  setActiveChatIndex,
} from "../../data/redux/slices/ChatSlice";
import FeedItem from "./FeedItem";
import { CollectiveChatData, SingleChat, User } from "../../utils/types";
import MessagingService from "../../data/services/MessagingService";

function MainBrowser() {
  const currentUser: User = useAppSelector((state) => state.user.currentUser);
  const dispatch = useAppDispatch();
  const [feeds, setFeeds] = useState<SingleChat[] | undefined>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { data } = useQuery("/chat", async () => {
    return await MessagingService.getAllSingleChats();
  });

  useEffect(() => {
    if (!data) {
      return;
    }
    console.log(data);
    let _collectiveChatData: CollectiveChatData = {
      chatData: [],
      chats: [],
    };

    const chats: SingleChat[] = data.map(
      (item: any): SingleChat => ({
        person1:
          item.person1.name === currentUser.name ? item.person1 : item.person2,
        person2:
          item.person1.name === currentUser.name ? item.person2 : item.person1,
        createdAt: Date.now(),
        isInit: false,
        id: item._id,
      })
    );
    setFeeds(chats);
    _collectiveChatData.chats = chats;
    for (let chat of chats) {
      _collectiveChatData.chatData.push({
        chat: chat,
        messages: [],
        draftMessage: "",
      });
    }
    dispatch(setCollectiveChatData(_collectiveChatData));
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
          <Button
            className="gradient-blue text-white hvr-grow"
            size="lg"
            onClick={() => setIsModalOpen(true)}
          >
            <Text className="mr-2 text-2xl">+</Text> Create new chat
          </Button>
        </Box>

        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
          }}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create new chat</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<BsSearch color="gray.300" />}
                />
                <Input type="text" placeholder="Search users..." />
              </InputGroup>
            </ModalBody>

            <ModalFooter>
              <Button
                className="gradient-blue text-white hvr-grow"
                size="lg"
                onClick={() => {}}
              >
                Create
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </SimpleGrid>
      <div>
        {feeds?.map((chat: SingleChat, index: number) => (
          <FeedItem
            key={chat.id}
            user={
              currentUser.name === chat.person1.name
                ? chat.person2
                : chat.person1
            }
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
