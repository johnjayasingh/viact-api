import { Connection } from 'mongoose';
import { DETECTION_MODEL, DATABASE_CONNECTION } from '../constants';
import { DetectionSchema } from './schema/detection.schema';

export const detectionProviders = [
  {
    provide: DETECTION_MODEL,
    useFactory: (connection: Connection) =>
      connection.model(DETECTION_MODEL, DetectionSchema),
    inject: [DATABASE_CONNECTION],
  },
];
