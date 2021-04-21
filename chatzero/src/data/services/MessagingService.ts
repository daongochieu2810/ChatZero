import { io, Socket } from "socket.io-client";
import Config from "../../utils/config";
import { User } from "../../utils/types";
export default class MessagingService {
  private static socket: Socket = io(Config.SERVER_BASE_URL);

  public static initSocketStream(person1: User, person2: User) {
    this.socket.on("connect", function () {
      console.log("Connected to server");
    });

    this.socket.on("exception", function (data) {
      console.log("exception", data);
    });

    this.socket.on("disconnect", function () {
      console.log("disconnected");
    });

    this.socket.emit("join_room", { roomId: person1.name + person2.name });
    this.socket.on("joined_room", function (message) {
      console.log(message);
    });
  }

  public static sendMessage(person1: User, person2: User, message: string) {
    this.socket.emit("send_message", {
      data: message,
      roomId: person1.name + person2.name,
    });
  }

  public static setReceiveMessageCallback(
    person1: User,
    person2: User,
    callback: (data: any) => void
  ) {
    this.socket.on("sent_message", function (_data: any) {
      console.log(_data);
      if (person1.name + person2.name === _data.roomId) {
        callback(_data.data);
      }
    });
  }
}
