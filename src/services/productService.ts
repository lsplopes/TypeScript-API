import { IProduct } from '../interfaces/Iproduct';
import productModel from '../models/productModel';

async function getAll() {
  const data = await productModel.getAll();
  return { status: 200, data };
}

async function create(product: IProduct) {
  const data = await productModel.create(product);
  return { status: 201, data };
}

export default {
  create,
  getAll,
};
