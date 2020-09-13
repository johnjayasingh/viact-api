import { Document } from 'mongoose';

export interface Company extends Document {
  readonly name: string;
  readonly title: string;
  readonly subscriptionEndsOn: Date;
  readonly engines: any[];
  readonly apiKey: string;
  readonly projects: any[];
  readonly officeHours: string;
}
