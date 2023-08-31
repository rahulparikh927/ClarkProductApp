import { ProductModel } from "../model/product.model";
import { ariveAxiosInstance } from "./axios";

export interface getProductParams {
  limit?: number;
}

export class ProductService {
  public static async getProducts(
    params: getProductParams
  ): Promise<ProductModel[]> {
    const res = await ariveAxiosInstance.get("/products", {
      params,
    });

    return res.data;
  }
}
