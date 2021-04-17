import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import config from "../../utils/config";

export default class ApiService {
  private static readonly BASE_URL = config.SERVER_BASE_URL;

  public static async request(requestConfig: AxiosRequestConfig): Promise<any> {
    try {
      const config: AxiosRequestConfig = {
        baseURL: this.BASE_URL,
        headers: {
          "Content-Type": "application/json",
        },
        ...requestConfig,
      };

      const response: AxiosResponse = await axios(config);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
}
