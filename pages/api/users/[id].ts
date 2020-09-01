import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const ROOT_URL = `http://localhost:3000/api`;

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  const id = _req.query.id;
  console.log('id = ', id);

  try {
    const response = await axios.delete(`${ROOT_URL}/users/${id}`);
    res.status(200).json({
      result: response.data,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};
