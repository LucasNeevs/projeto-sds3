import { Sale } from './Sale';

export interface SalePage {
  content?: Sale[];
  last: boolean;
  totalPages: number;
  totalElements: number;
  numberOfElements?: number;
  first: boolean;
  size?: number;
  number: number;
  empty?: boolean;
}