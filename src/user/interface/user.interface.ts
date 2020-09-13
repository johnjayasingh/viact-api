import { Document } from 'mongoose';
import { Company } from "../../company/interface/company.interface";

export interface User extends Document {
  readonly id: string;
  readonly companies: Company[];
}
