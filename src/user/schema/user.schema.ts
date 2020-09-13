import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      unique: true,
    },
  },
  {
    id: false,
  },
);
