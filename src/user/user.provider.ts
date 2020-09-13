import { Connection } from 'mongoose';
import { USER_MODEL, DATABASE_CONNECTION } from '../constants';
import { UserSchema } from './schema/user.schema';

export const userProviders = [
  {
    provide: USER_MODEL,
    useFactory: (connection: Connection) =>
      connection.model(USER_MODEL, UserSchema),
    inject: [DATABASE_CONNECTION],
  },
];
