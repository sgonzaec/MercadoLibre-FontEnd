import { Address } from "./address";
import { Prices } from "./Prices";
import { Shipping } from "./shipping";

export type Product = {
  title: string;
  thumbnail: string;
  prices: Prices;
  address: Address;
  shipping: Shipping;
};
