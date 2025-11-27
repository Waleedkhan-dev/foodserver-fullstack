import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User';
import { generateToken } from '../utils/jwt';
import jwt from 'jsonwebtoken';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      postCode,
      country,
      state,
      password,
    } = req.body;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !address ||
      !city ||
      !postCode ||
      !country ||
      !state ||
      !password
    ) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(409).json({ message: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      postCode,
      country,
      state,
      password: hashedPassword,
    });
    console.log('JWT_SECRET', process.env.JWT_SECRET);

    const token = jwt.sign(
      { id: newUser._id },
      process.env.JWT_SECRET as string,
      { expiresIn: '1d' }
    );
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.status(201).json({
      message: 'User registered successfully ',
      user: {
        id: newUser._id,
        email: newUser.email,
        name: `${newUser.firstName} ${newUser.lastName}`,
        password: hashedPassword,
        phone: newUser.phone,
        address: newUser.address,
        city: newUser.city,
        postCode: newUser.postCode,
        country: newUser.country,
        state: newUser.state,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Server error try again later',
    });
  }
};

export const userLogin = async (req: Request, res: Response) => {
  console.log('userLogin');

  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const user = await User.findOne({ email }).select('+password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user._id.toString());
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      message: 'Login successful',
      id: user._id,
      // name: `${user.firstName} ${user.lastName}`,
      email: user.email,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export const logoutUser = async (req: Request, res: Response) => {
  res.clearCookie('token', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
  });
  return res.status(200).json({ message: 'logout successfully' });
};
