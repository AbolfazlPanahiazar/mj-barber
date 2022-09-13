export enum IPackagePriceCurrency {
  TRY = "TRY",
  USD = "USD",
  EUR = "EUR",
}

export interface IPackagePrice {
  amount: number;
  currency: IPackagePriceCurrency;
}

export interface IPackage {
  title: string;
  price: IPackagePrice;
  description: string;
  image: string;
}
