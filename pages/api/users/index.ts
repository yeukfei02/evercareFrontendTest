import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const ROOT_URL = `https://localhost:3000/api`;

export default async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await axios.get(`${ROOT_URL}/users`);
    res.status(200).json({
      result: response.data,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};
