import { io, Socket } from "socket.io-client";
import Config from "../../utils/config";
import { Message, SingleChat, User } from "../../utils/types";
import ApiService from "./ApiService";
export default class MessagingService {
  private static socket: Socket = io(Config.SERVER_BASE_URL);

  public static async getAllSingleChats(): Promise<any> {
    return await ApiService.request({
      url: "/chat",
      method: "GET",
    });
  }

  public static initSocketStream(chatId: string) {
    this.socket.on("connect", function () {
      console.log("Connected to server");
    });

    this.socket.on("exception", function (data) {
      console.log("exception", data);
    });

    this.socket.on("disconnect", function () {
      console.log("disconnected");
    });

    this.socket.emit("join_room", {
      roomId: chatId,
    });
    this.socket.on("joined_room", function (message) {
      console.log(message);
    });
  }

  public static sendMessage(
    chatId: string,
    sender: User,
    receiver: User,
    message: string
  ) {
    this.socket.emit("send_message", {
      data: message,
      sender: sender,
      receiver: receiver,
      roomId: chatId,
    });
  }

  public static setReceiveMessageCallback(
    chatId: string,
    callback: (data: Message) => void
  ) {
    this.socket.on("sent_message", function (_data: any) {
      console.log(_data);
      if (chatId === _data.roomId) {
        callback({
          content: _data.data,
          sender: _data.sender,
          receiver: _data.receiver,
        });
      }
    });
  }
}
