export interface IOrder {
  id: number;
  userId: number;
}

export interface Order extends IOrder {
  productsIds: number[];
}