import { io, Socket } from "socket.io-client";
import Config from "../../utils/config";
export default class MessagingService {
  private static socket: Socket = io(Config.SERVER_BASE_URL);

  public static initSocketStream() {
    this.socket.on("connect", function () {
      console.log("connected");
    });

    this.socket.on("exception", function (data) {
      console.log("exception", data);
    });

    this.socket.on("disconnect", function () {
      console.log("disconnected");
    });
  }

  public static sendMessage(message: string) {
    this.socket.emit("messages", { data: message });
  }

  public static setReceiveMessageCallback(callback: () => void) {
    this.socket.on("messages", function (data) {
      console.log("message", data);
      callback();
    });
  }
}
