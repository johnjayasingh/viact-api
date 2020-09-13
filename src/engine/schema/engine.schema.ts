import * as mongoose from 'mongoose';

export const EngineSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      unique: true,
    },
    name: String,
    color: String,
    sms: Boolean,
    email: Boolean,
    requireApproval: Boolean,
  },
  {
    id: false,
  },
);
