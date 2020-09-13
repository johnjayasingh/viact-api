import { Connection } from 'mongoose';
import { ENGINE_MODEL, DATABASE_CONNECTION } from '../constants';
import { UserSchema } from './schema/user.schema';

export const UserProviders = [
  {
    provide: ENGINE_MODEL,
    useFactory: (connection: Connection) =>
      connection.model(ENGINE_MODEL, UserSchema),
    inject: [DATABASE_CONNECTION],
  },
];
