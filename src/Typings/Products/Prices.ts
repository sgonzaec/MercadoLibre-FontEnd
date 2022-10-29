export type Prices = {
  prices: PriceDetail[];
};

type PriceDetail = {
  amount: number;
  currency_id: string;
}