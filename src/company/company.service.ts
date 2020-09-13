import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { COMPANY_MODEL } from '../constants';
import { CreateCompanyDto } from './dto/create-company.dto';
import { Company } from './interface/company.interface';

@Injectable()
export class CompanyService {
  constructor(
    @Inject(COMPANY_MODEL)
    private companyModel: Model<Company>,
  ) {}

  async create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    const createdCat = new this.companyModel(createCompanyDto);
    return createdCat.save();
  }

  async findAll(): Promise<Company[]> {
    return this.companyModel.find().exec();
  }
}
