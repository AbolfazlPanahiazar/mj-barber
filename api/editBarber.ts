import { AxiosResponse } from "axios";

import api from "./api";

interface IBody {}

interface IResponse {}

export const editBarbers = (userName: string, id: string) => {
  return api.put<any, AxiosResponse<any>>(`/api/barbers/${id}`, {
    fullname: userName,
  });
};
