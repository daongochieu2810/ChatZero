import React, { useEffect } from "react";
import { io, Socket } from "socket.io-client";
import Config from "../../utils/config";
import { Container, HStack } from "@chakra-ui/react";
import SideBar from "../SideBar";
import MainChat from "../main_chat/MainChat";
import MainBrowser from "../chat_browser/MainBrowser";

function Home() {
  useEffect(() => {
    /*const socket: Socket = io(Config.SERVER_BASE_URL);
    console.log(Config.SERVER_BASE_URL);
    socket.on("connect", function () {
      console.log("Connected");

      socket.emit("messages", { data: "test" });
    });

    socket.on("messages", function (data) {
      console.log("message", data);
    });

    socket.on("exception", function (data) {
      console.log("event", data);
    });
    socket.on("disconnect", function () {
      console.log("Disconnected");
    });*/
  });
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
