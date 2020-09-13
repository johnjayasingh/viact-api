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

  create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    const createdCat = new this.companyModel(createCompanyDto);
    return createdCat.save();
  }

  findAll(): Promise<Company[]> {
    return this.companyModel.find().exec();
  }

  findDistinct(filter, field: string): Promise<any> {
    return this.companyModel.find(filter).distinct(field).exec();
  }

  findOne(filter): Promise<any> {
    return this.companyModel.findOne(filter).exec();
  }

  find(id: string): Promise<any> {
    return this.companyModel.findById(id).exec();
  }

  update(id: string, body: any = {}): Promise<any> {
    return this.companyModel.findByIdAndUpdate(id, body).exec();
  }

  delete(id: string): Promise<any> {
    return this.companyModel.findByIdAndDelete(id).exec();
  }
}
