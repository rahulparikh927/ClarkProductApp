import { useQuery } from "@tanstack/react-query";
import {
  ProductService,
  getProductParams,
} from "../../services/product.service";

export function useProducts(productParams: getProductParams) {
  return useQuery(
    ["productList", productParams],
    async () => {
      return ProductService.getProducts(productParams);
    },
    { keepPreviousData: true }
  );
}
