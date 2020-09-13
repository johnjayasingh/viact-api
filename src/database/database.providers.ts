import * as mongoose from 'mongoose';
import { DATABASE_CONNECTION } from '../constants';

export const databaseProviders = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        `mongodb://rwuser:${encodeURIComponent(
          'Viact_123',
        )}@159.138.40.164:8635/tesdevelop?authSource=admin`,
        {
          useUnifiedTopology: true,
          useNewUrlParser: true,
          useCreateIndex: true,
        },
      ),
  },
];
