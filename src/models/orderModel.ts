import connection from './connection';

import { Order } from '../interfaces/Iorders';

async function getAll(): Promise<Order[]> {
  const queryPartOne = 'SELECT ord.id, ord.userId, JSON_ARRAYAGG(pr.id) AS productsIds ';
  const queryPartTwo = 'FROM Trybesmith.Orders AS ord INNER JOIN  Trybesmith.Products AS pr ';
  const queryPartThree = 'ON ord.id = pr.orderId GROUP BY ord.id;';
  const query = queryPartOne + queryPartTwo + queryPartThree;

  const [orders] = await connection.execute(query);

  return orders as Order[];
}

export default {
  getAll,
};
