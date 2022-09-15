import { AxiosResponse } from "axios";

import api from "./api";

interface IResponse {}

export const deletePackage = (id: string) => {
  return api.delete<never,AxiosResponse<any>>(`/api/packages/${id}`);
};
