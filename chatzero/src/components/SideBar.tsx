import React from "react";
import { Box, HStack, Text, Image, Center } from "@chakra-ui/react";
import {
  AiOutlinePoweroff as LogOut,
  AiOutlineHome as Home,
  AiOutlineBell as Bell,
} from "react-icons/ai";
import { BsChatDots as Chat, BsGear as Settings } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import { baseUrl } from "../constants";

import { Avatar } from "../resources/Resources";

function SideBar() {
  const history = useHistory();
  const sideBarItem = [
    {
      name: "Home",
      icon: <Home className="icon" size="24" />,
    },
    {
      name: "Chat",
      icon: <Chat className="icon" size="24" />,
    },
    {
      name: "Notification",
      icon: <Bell className="icon" size="24" />,
    },
    {
      name: "Settings",
      icon: <Settings className="icon" size="24" />,
    },
  ];
  return (
    <Box
      className="desktop:block tablet:hidden mobile:hidden py-8 m-0 shadow-2xl h-full w-2/12 min-w-side"
      backgroundColor="white"
    >
      <Center>
        <Image className="rounded-full w-3/6" src={Avatar} alt="Avatar" />
      </Center>
      <Center className="my-5">
        <Text className="font-semibold text-lg">Dao Ngoc Hieu</Text>
      </Center>
      {sideBarItem.map((item: any, index: number) => (
        <HStack
          key={index}
          className="py-5 px-8 cursor-pointer nav-item hover:shadow-md"
          spacing="15px"
        >
          {item.icon}
          <Text className="uppercase nav-text font-semibold text-gray-400">
            {item.name}
          </Text>
        </HStack>
      ))}
      <HStack
        className="absolute m-8 left-0 bottom-0 hvr-grow log-out cursor-pointer"
        onClick={() => {
          history.push("/auth/login");
        }}
      >
        <LogOut
          style={{
            marginRight: "15px",
          }}
          size="20px"
        />
        <Text className="uppercase font-semibold text-gray-400">Log Out</Text>
      </HStack>
    </Box>
  );
}

export default SideBar;
