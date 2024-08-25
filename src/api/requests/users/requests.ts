import { instance } from "../../index";
import { AxiosResponse } from "axios";
import { UserResponse } from "./types";

const LoggerMiddleware = (res: AxiosResponse) => {
  return res;
};

export const getUser = () =>
  instance
    .get("/user.json")
    .then(LoggerMiddleware)
    .then((response: { data: UserResponse }) => response.data as UserResponse);

export const getPersonalUsers = () =>
  instance
    .get("/user-personal.json")
    .then(LoggerMiddleware)
    .then((response: { data: UserResponse }) => response.data as UserResponse);
