import { Module } from '@nestjs/common';
import { CompanyController } from './company.controller';
import { companyProviders } from './company.provider';
import { CompanyService } from './company.service';

@Module({
  controllers: [CompanyController],
  providers: [CompanyService, ...companyProviders],
})
export class CompanyModule {}
