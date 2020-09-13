import * as mongoose from 'mongoose';
import {
  CAMERA_MODEL,
  ENGINE_MODEL,
  PROJECT_MODEL,
  USER_MODEL,
} from './../../constants';

export const CompanySchema = new mongoose.Schema(
  {
    id: {
      type: String,
      unique: true,
    },
    name: String,
    title: String,
    subscriptionEndsOn: Date,
    officeHours: String,
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
    users: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: USER_MODEL,
      },
    ],
    cameras: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: CAMERA_MODEL,
      },
    ],
  },
  {
    id: false,
  },
);
