import { AxiosResponse } from "axios";

import api from "./api";
import { IPackage } from "types";

interface IBody {
  title: string;
  priceTRY: number;
  priceUSD: number;
  priceEUR: number;
  description: string;
  image: string;
}

interface IResponse {

}

export const editPackage = (packages: IPackage , id:string) => {
  return api.put<IBody, AxiosResponse<any>>(`/api/packages/${id}`, packages);
};
