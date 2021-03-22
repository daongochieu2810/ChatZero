import { Container, HStack } from "@chakra-ui/react";
import SideBar from "./components/SideBar";
import MainChat from "./components/main_chat/MainChat";
import MainBrowser from "./components/chat_browser/MainBrowser";

function App() {
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
        <HStack className="w-full h-full" spacing="0">
          <SideBar />
          <MainBrowser />
          <MainChat />
        </HStack>
      </Container>
    </div>
  );
}

export default App;
