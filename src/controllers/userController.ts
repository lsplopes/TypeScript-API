import { Request, Response } from 'express';
import { IUser, UserCredentials } from '../interfaces/Iuser';

import userService from '../services/userService';

async function create(req: Request, res: Response) {
  const user = req.body as IUser;
  const { status, data } = await userService.create(user);

  return res.status(status).json(data);
}

async function login(req: Request, res: Response) {
  const credentials = req.body as UserCredentials;
  const { status, data } = await userService.login(credentials);

  return res.status(status).json(data);
}

export default {
  create,
  login,
};
