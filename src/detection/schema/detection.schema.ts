import * as mongoose from 'mongoose';
import { ENGINE_MODEL, USER_MODEL } from '../../constants';

export const DetectionSchema = new mongoose.Schema({
  timestamp: Date,
  alert: Boolean,
  rejectReason: String,
  alertStaus: String,
  staus: String,
  meta: mongoose.SchemaTypes.Mixed,
  engine: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: ENGINE_MODEL,
  },
  updatedBy: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: USER_MODEL,
  },
  readBy: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: USER_MODEL,
    },
  ],
  comments: [mongoose.SchemaTypes.Mixed],
});
