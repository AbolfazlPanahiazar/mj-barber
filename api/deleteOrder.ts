import { AxiosResponse } from "axios";

import api from "./api";

interface IResponse {}

export const deleteOrder = (id: string) => {
  return api.delete<never,AxiosResponse<any>>(`/api/orders/${id}`);
};
