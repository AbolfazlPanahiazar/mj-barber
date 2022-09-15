import { AxiosResponse } from "axios";

import api from "./api";

interface IResponse {
 
}

export const getBarbers = () => {
  return api.get<never,AxiosResponse<any>>("/api/barbers");
};
