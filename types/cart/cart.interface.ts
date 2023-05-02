import { ProductInterface } from "../products/products.interface";

export interface CartIterface {
  items: CartItem[];
}

export interface CartItem {
  product: ProductInterface;
  amount: number;
}
