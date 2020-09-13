import * as mongoose from 'mongoose';
import { COMPANY_MODEL } from './../../constants';

export const UserSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      unique: true,
    },
    companies: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: COMPANY_MODEL,
      },
    ],
  },
  {
    id: false,
  },
);
