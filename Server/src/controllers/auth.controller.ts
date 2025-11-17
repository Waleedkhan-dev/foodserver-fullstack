import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User from '../models/User';

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

    return res.status(201).json({
      message: 'User registered successfully ',
      user: {
        id: newUser._id,
        email: newUser.email,
        name: `${newUser.firstName} ${newUser.lastName}`,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Server error try again later',
    });
  }
};
