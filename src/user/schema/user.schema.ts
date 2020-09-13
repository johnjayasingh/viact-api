import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      unique: true,
    },
    notification: {
      email: Boolean,
      sms: Boolean,
      webex: Boolean,
      push: Boolean,
    },
    permission: {
      reporting: Boolean,
      cameraManagement: Boolean,
      userManagement: Boolean,
      detectionManagement: Boolean,
    },
  },
  {
    id: false,
  },
);
