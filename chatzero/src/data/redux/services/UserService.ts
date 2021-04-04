import { User } from "../../../utils/types";
import ApiService from "./ApiService";

export default class UserService {
  public static async createUser(user: User): Promise<User> {
    const response: User = await ApiService.request({
      url: "/users",
      method: "POST",
      data: user,
    });
    return response;
  }

  public static async getUsers(): Promise<User[]> {
    return await ApiService.request({
      url: "/users",
      method: "GET",
    });
  }
}
