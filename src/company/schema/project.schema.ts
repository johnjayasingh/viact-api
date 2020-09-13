import * as mongoose from 'mongoose';

export const ProjectSchema = new mongoose.Schema({
  name: String,
  quarter: String,
  capacity: Number,
  target: Number,
  period: [Date, Date],
  actualPeriod: [Date, Date],
});
