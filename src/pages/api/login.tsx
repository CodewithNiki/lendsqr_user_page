import { Users } from "../../../data/user";
import { NextApiRequest, NextApiResponse } from 'next'

interface User {
  email: string;
  password: number;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<User | { message: string }>) {
  try {
    if (req.method !== 'POST') {
      res.status(405).send({ message: 'Only POST requests allowed' })
      return
    }
    const body = JSON.parse(JSON.stringify(req.body))
    const user = Users.find((user) => user.email === body.email && user.password === parseInt(body.password));
    if (!user) {
      res.status(404).send({ message: 'User does not exist!' })
      return
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(405).send({ message: "error" })
    return
  }
};
