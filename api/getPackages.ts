import { AxiosResponse } from "axios";

import api from "./api";

interface IResponse {
  packages: {
    title: string;
    priceTRY: number;
    priceUSD: number;
    priceEUR: number;
    description: string;
    image: string;
    _id: string;
    __v: number;
  }[];
}

export const getPackages = () => {
  return api.get<never,AxiosResponse<IResponse>>("/api/packages");
};
