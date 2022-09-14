export enum IPackagePriceCurrency {
  TRY = "TRY",
  USD = "USD",
  EUR = "EUR",
}

export interface IPackage {
  title: string;
  priceTRY: number;
  priceUSD: number;
  priceEUR: number;
  description: string;
  image: string;
}
