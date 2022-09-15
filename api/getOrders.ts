import { AxiosResponse } from "axios";

import api from "./api";

interface IResponse {

}

export const getOrders = () => {
  return api.get<never,AxiosResponse<any>>("/api/orders");
};
