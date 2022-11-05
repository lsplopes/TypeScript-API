import orderModel from '../models/orderModel';

async function getAll() {
  const data = await orderModel.getAll();
  return { status: 200, data };
}

export default {
  getAll,
};
