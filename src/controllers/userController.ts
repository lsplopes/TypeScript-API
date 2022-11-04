import { Request, Response } from 'express';
import { IUser } from '../interfaces/Iuser';

import userService from '../services/userService';

async function create(req: Request, res: Response) {
  const user = req.body as IUser;
  const { status, data } = await userService.create(user);

  return res.status(status).json(data);
}

export default {
  create,
};
