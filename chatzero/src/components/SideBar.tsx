import { Box, HStack, Text, Image, Center } from "@chakra-ui/react";
import { AiOutlinePoweroff as LogOut } from "react-icons/ai";
import { Home, Chat, Bell, Settings, Avatar } from "../resources/Resources";

function SideBar() {
  const sideBarItem = [
    {
      name: "Home",
      icon: Home,
    },
    {
      name: "Chat",
      icon: Chat,
    },
    {
      name: "Notification",
      icon: Bell,
    },
    {
      name: "Settings",
      icon: Settings,
    },
  ];
  return (
    <Box
      className="p-8 m-0 shadow-2xl h-full w-2/12 min-w-side"
      backgroundColor="white"
    >
      <Center>
        <Image className="rounded-full w-3/6" src={Avatar} alt="Avatar" />
      </Center>
      <Center className="my-5">
        <Text className="font-semibold text-lg">Dao Ngoc Hieu</Text>
      </Center>
      {sideBarItem.map((item) => (
        <HStack className="my-10" spacing="15px">
          <img src={item.icon} alt={item.name + " Icon"} />
          <Text className="uppercase font-semibold text-gray-400">
            {item.name}
          </Text>
        </HStack>
      ))}
      <HStack className="absolute m-8 left-0 bottom-0">
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
