import { AxiosResponse } from "axios";

import api from "./api";
import { IPackage } from "types";

interface IBody {}

interface IResponse {}

export const postBarbers = (userName: string) => {
  return api.post<any, AxiosResponse<any>>("/api/barbers", {
    fullname: userName,
  });
};
