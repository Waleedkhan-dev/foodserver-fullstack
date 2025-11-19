import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  city: string;
  postCode: string;
  country: string;
  state: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const UserSchema: Schema = new Schema<IUser>(
  {
    firstName: { type: String, required: true, minlength: 2 },
    lastName: { type: String, required: true, minlength: 2 },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    phone: { type: String, required: true, minlength: 10 },
    address: { type: String, required: true, minlength: 5 },
    city: { type: String, required: true, minlength: 2 },
    postCode: { type: String, required: true, minlength: 3 },
    country: { type: String, required: true, minlength: 2 },
    state: { type: String, required: true, minlength: 2 },
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;
