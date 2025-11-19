import express from 'express';
import type { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnection from './utils/db';
dotenv.config();
import router from './routes/auth.route';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(
  cors({
    origin: 'http://localhost:3000', // your frontend
    credentials: true, // allow cookies to be sent
  })
);

app.use(express.json());
app.use('/api/auth', router);
app.use(cookieParser());

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Backend with TypeScript working' });
});

app.listen(PORT, () => {
  dbConnection();
  console.log(`Server running on port ${PORT}`);
});
