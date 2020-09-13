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
    await service.create({
      name: 'Test',
      officeHours: '10:00-10:00',
      title: 'Page Title',
    });
  });

  it('should be creating Company', async () => {
    expect(service).toBeDefined();
    const data = await service.findAll();
    expect(data.length).toBeGreaterThan(0);
  });

  it('should be delete all Company', async () => {
    expect(service).toBeDefined();
    const data = await service.findAll();
    await data.forEach(async (company) => {
      await service.delete(company.id);
    });
  });

  it('should be empty', async () => {
    expect(service).toBeDefined();
    const data = await service.findAll();
    expect(data.length).toBe(0);
  });
});
