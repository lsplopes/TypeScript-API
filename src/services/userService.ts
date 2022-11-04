import jwt from 'jsonwebtoken';

import { IUser } from '../interfaces/Iuser';
import userModel from '../models/userModel';
import { secret, config } from '../middlewares/jwtConfig';

async function create(user: IUser) {
  const payload = await userModel.create(user);
  const token = jwt.sign({ payload }, secret, config);
  const data = { token };

  return { status: 201, data };
}

export default {
  create,
};
