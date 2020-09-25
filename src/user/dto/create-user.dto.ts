import { Company } from "src/company/interface/company.interface";

export class CreateUserDto {
  readonly id: string;
  readonly companies: Company[];
}
