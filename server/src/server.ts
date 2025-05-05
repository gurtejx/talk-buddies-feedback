import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.SERVER_PORT || 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from TypeScript backend!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
