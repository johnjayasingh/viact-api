import * as mongoose from 'mongoose';

export const CameraSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      unique: true,
    },
    name: String,
    color: String,
    sms: Boolean,
    email: Boolean,
  },
  {
    id: false,
  },
);
