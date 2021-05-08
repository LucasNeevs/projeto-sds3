import { Seller } from "./Seller";

export interface Sale {
  id: number;
  visited: number;
  deals: number;
  amountDouble: number;
  date: string;
  seller: Seller;
}