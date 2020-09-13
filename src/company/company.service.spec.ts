import { Test, TestingModule } from '@nestjs/testing';
import { async } from 'rxjs/internal/scheduler/async';
import { databaseProviders } from '../database/database.providers';
import { companyProviders } from './company.provider';
import { CompanyService } from './company.service';

describe('CompanyService', () => {
  let service: CompanyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [...databaseProviders, ...companyProviders, CompanyService],
    }).compile();

    service = module.get<CompanyService>(CompanyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be creating Company', async () => {
    expect(service).toBeDefined();
    try {
      await service.create({
        id: 'test',
        name: 'Test',
        officeHours: '10:00-10:00',
        title: 'Page Title',
      });
    } catch (error) {}
  });

  it('should be creating Company', async () => {
    expect(service).toBeDefined();
    const data = await service.findAll();
    expect(data.length).toBeGreaterThan(0);
  });

  it('should be Company', async () => {
    expect(service).toBeDefined();
    const data = await service.findOne({ id: 'test' });
    expect(data).toBeDefined();
  });
});
