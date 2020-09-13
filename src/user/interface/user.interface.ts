import { Document } from 'mongoose';
import { Company } from '../../company/interface/company.interface';

export interface Notification extends Document {
  readonly email: boolean;
  readonly sms: boolean;
  readonly webex: boolean;
  readonly push: boolean;
}

export interface Permission extends Document {
  readonly reporting: boolean;
  readonly cameraManagement: boolean;
  readonly userManagement: boolean;
  readonly detectionManagement: boolean;
}

export interface User extends Document {
  readonly id: string;
  readonly notification: Notification;
  readonly permission: Permission;
}
