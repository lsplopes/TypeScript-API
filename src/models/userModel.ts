import { ResultSetHeader } from 'mysql2';

import connection from './connection';
import { IUser, User } from '../interfaces/Iuser';

async function create(user: IUser): Promise<User> {
  const { username, classe, level, password } = user;

  const queryPart1 = 'INSERT INTO Trybesmith.Users ';
  const queryPart2 = '(username, classe, level, password) VALUES (?, ?, ?, ?)';
  const query = queryPart1 + queryPart2;
  const values = [username, classe, level, password];

  const [result] = await connection.execute<ResultSetHeader>(query, values);
  const { insertId: id } = result;

  const newUser: User = { id, username, classe, level, password };

  return newUser;
}

export default {
  create,
};
