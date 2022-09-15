import { AxiosResponse } from "axios";

import api from "./api";

interface IResponse {}

export const deletePackage = (id: string) => {
  return api.delete<AxiosResponse<any>>(`/api/packages/${id}`);
};
