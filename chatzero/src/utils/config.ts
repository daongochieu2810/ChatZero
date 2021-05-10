interface IConfig {
  [clientEnv: string]: {
    SERVER_BASE_URL: string;
    SOCKET_BASE_URL: string;
    MICROSERVICE_BASE_URL: string;
  };
}

const config: IConfig = {
  prod: {
    SERVER_BASE_URL: "",
    SOCKET_BASE_URL: "",
    MICROSERVICE_BASE_URL: "",
  },
  local: {
    SERVER_BASE_URL: "http://localhost:3001/",
    SOCKET_BASE_URL: "http://localhost:6739/",
    MICROSERVICE_BASE_URL: "http://localhost:3002/",
  },
};

const clientEnv: string = process.env.CLIENT_ENV || "local";
export default config[clientEnv];
