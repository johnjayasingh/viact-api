import { Connection } from 'mongoose';
import { CAMERA_MODEL, DATABASE_CONNECTION } from '../constants';
import { CameraSchema } from './schema/camera.schema';

export const CameraProviders = [
  {
    provide: CAMERA_MODEL,
    useFactory: (connection: Connection) =>
      connection.model(CAMERA_MODEL, CameraSchema),
    inject: [DATABASE_CONNECTION],
  },
];
