import express from 'express';
import type { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnection from './utils/db';
dotenv.config();
import router from './routes/auth.routes';
import cookieParser from 'cookie-parser';
import productRoute from './routes/product.routes';

const app = express();
const PORT = process.env.PORT || 5000;
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  })
);

app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', router);
app.use('/api/products', productRoute);
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Backend with TypeScript working' });
});

app.listen(PORT, () => {
  dbConnection();
  console.log(`Server running on port ${PORT}`);
});
