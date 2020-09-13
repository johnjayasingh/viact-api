import { Document } from 'mongoose';

export interface Detection extends Document {
  readonly id: string;
  readonly name: string;
  readonly color: string;
  readonly sms: boolean;
  readonly email: boolean;
}
