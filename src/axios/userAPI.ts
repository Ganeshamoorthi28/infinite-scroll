import axios, { AxiosRequestConfig } from "axios";

export function GET_USER_DATA() {
  const config: AxiosRequestConfig = {
    method: "get",
    url: "https://randomuser.me/api?results=500",
  };
  return axios(config);
}
