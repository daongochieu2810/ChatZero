import { ChangeEvent, useState } from "react";
import { Box, Textarea } from "@chakra-ui/react";

function ChatInput() {
  const [message, setMessage] = useState<string>("");
  const onMessageChange = (e: ChangeEvent) => {
    let inputMessage = e.target.nodeValue;
    console.log(inputMessage);
    setMessage(inputMessage ? inputMessage : "");
  };

  return (
    <Box className="absolute right-0 bottom-0 w-5/6 m-5">
      <Textarea
        placeholder="Enter your message..."
        value={message}
        onChange={onMessageChange}
      />
    </Box>
  );
}

export default ChatInput;
