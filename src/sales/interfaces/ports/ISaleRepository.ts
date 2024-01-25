import { Sale } from "../../domain/Sale";

export interface ISaleRepository {
  findById(id: string): Promise<Sale | null>;
  save(sale: Sale): Promise<void>;
}