import jwt from 'jsonwebtoken';

import { IUser, UserCredentials } from '../interfaces/Iuser';
import userModel from '../models/userModel';
import { secret, config } from '../middlewares/jwtConfig';

async function create(user: IUser) {
  const payload = await userModel.create(user);
  const token = jwt.sign({ payload }, secret, config);
  const data = { token };

  return { status: 201, data };
}

async function login(userCredentials: UserCredentials) {
  const info = await userModel.getByUsername(userCredentials.username);

  if (info === null || info.password !== userCredentials.password) {
    return { status: 401, data: { message: 'Username or password invalid' } };
  }

  const token = jwt.sign({ info }, secret, config);

  const data = { token };

  return { status: 200, data };
}

export default {
  create,
  login,
};
