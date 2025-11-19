import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
const JWT_SECRET = process.env.JWT_SECRET as string;

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { id: string };
    req.body.userId = decoded.id;
    next();
  } catch (error) {}
};
