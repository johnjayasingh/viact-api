import { Document } from 'mongoose';

export interface Engine extends Document {
  readonly id: string;
  readonly name: string;
  readonly color: string;
  readonly sms: boolean;
  readonly email: boolean;
  readonly requireApproval: boolean;
}
