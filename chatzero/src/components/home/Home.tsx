import React, { useEffect } from "react";
import { Container, HStack } from "@chakra-ui/react";
import SideBar from "../SideBar";
import MainChat from "../main_chat/MainChat";
import MainBrowser from "../chat_browser/MainBrowser";

function Home() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Container
        variant="full"
        bgGradient="linear-gradient(to-r, #F3F3FB, #FDFBFD)"
      >
        <HStack className="w-full h-full" spacing="10">
          <SideBar />
          <MainBrowser />
          <MainChat />
        </HStack>
      </Container>
    </div>
  );
}

export default Home;
