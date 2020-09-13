import * as mongoose from 'mongoose';
import { ENGINE_MODEL, PROJECT_MODEL } from './../../constants';

export const CompanySchema = new mongoose.Schema({
  name: String,
  title: String,
  subscriptionEndsOn: Date,
  engines: [
    {
      requireApproval: Boolean,
      engine: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: ENGINE_MODEL,
      },
    },
  ],
  apiKey: String,
  projects: [
    {
      selected: Boolean,
      project: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: PROJECT_MODEL,
      },
    },
  ],
  officeHours: String,
});
