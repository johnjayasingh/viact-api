import { Document } from 'mongoose';

export interface Project extends Document {
  readonly name: string;
  readonly quarter: string;
  readonly capacity: number;
  readonly target: number;
  readonly period: [Date, Date];
  readonly actualPeriod: [Date, Date];
}
