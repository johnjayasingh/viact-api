import { Connection } from 'mongoose';
import { ENGINE_MODEL, DATABASE_CONNECTION } from '../constants';
import { EngineSchema } from './schema/engine.schema';

export const EngineProviders = [
  {
    provide: ENGINE_MODEL,
    useFactory: (connection: Connection) =>
      connection.model(ENGINE_MODEL, EngineSchema),
    inject: [DATABASE_CONNECTION],
  },
];
