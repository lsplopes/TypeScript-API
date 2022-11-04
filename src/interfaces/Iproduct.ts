export interface IProduct {
  name: string;
  amount: string;
  orderId?: null | number;
}

export interface Product extends IProduct {
  id: number;
}
