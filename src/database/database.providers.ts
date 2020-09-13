import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        `mongodb://rwuser:${encodeURIComponent(
          'Viact_123',
        )}@159.138.40.164:8635/tesdevelop?authSource=admin`,
      ),
  },
];
