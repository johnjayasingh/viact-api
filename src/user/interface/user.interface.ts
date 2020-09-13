import { Document } from 'mongoose';

export interface User extends Document {
  readonly id: string;
  readonly name: string;
  readonly color: string;
  readonly sms: boolean;
  readonly email: boolean;
  readonly requireApproval: boolean;
}
