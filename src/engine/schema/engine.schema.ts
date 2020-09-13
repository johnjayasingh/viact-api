import * as mongoose from 'mongoose';

export const EngineSchema = new mongoose.Schema({
  key: String,
  name: String,
  color: Number,
  sms: Boolean,
  email: Boolean,
  requireApproval: Boolean,
});
