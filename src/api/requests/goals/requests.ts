import { instance } from "../../index";
import { AxiosResponse } from "axios";
import { GoalsResponse } from "./types";

const LoggerMiddleware = (res: AxiosResponse) => {
  return res;
};

export const getGoals = () =>
  instance
    .get("/goals.json")
    .then(LoggerMiddleware)
    .then(
      (response: { data: GoalsResponse }) => response.data as GoalsResponse
    );
