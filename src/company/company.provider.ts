import { Connection } from 'mongoose';
import {
  COMPANY_MODEL,
  DATABASE_CONNECTION,
  PROJECT_MODEL,
} from '../constants';
import { CompanySchema } from './schema/company.schema';
import { ProjectSchema } from './schema/project.schema';

export const companyProviders = [
  {
    provide: COMPANY_MODEL,
    useFactory: (connection: Connection) =>
      connection.model(COMPANY_MODEL, CompanySchema),
    inject: [DATABASE_CONNECTION],
  },
  {
    provide: PROJECT_MODEL,
    useFactory: (connection: Connection) =>
      connection.model(PROJECT_MODEL, ProjectSchema),
    inject: [DATABASE_CONNECTION],
  },
];
