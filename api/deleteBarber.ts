import { AxiosResponse } from "axios";

import api from "./api";

interface IResponse {}

export const deleteBarbers = (id: string) => {
  return api.delete<never,AxiosResponse<any>>(`/api/barbers/${id}`);
};
