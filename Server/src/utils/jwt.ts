import jwt from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET as string;
console.log('data is', JWT_SECRET);

export const generateToken = (userId: string) => {
  return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: '1d' });
};
