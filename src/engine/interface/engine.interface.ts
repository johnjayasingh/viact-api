import { Document } from 'mongoose';

export interface Engine extends Document {
  readonly key: string;
  readonly name: string;
  readonly color: string;
  readonly sms: boolean;
  readonly email: boolean;
  readonly requireApproval: boolean;
}
