import { Seller } from "./Seller";

export interface Sale {
  id: number;
  visited: number;
  deals: number;
  amount: number;
  date: string;
  seller: Seller;
}