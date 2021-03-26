import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";
import { Center, Input } from "@chakra-ui/react";

function Login() {
  const history = useHistory();
  return (
    <Center className="gradient-blue w-full h-full">
      <Center className="w-6/12 h-5/6 rounded-sm bg-white shadow-md">
        <Input placeholder="Enter your user..."/>
      </Center>
    </Center>
  );
}

export default Login;
