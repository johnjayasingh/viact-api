import { Test, TestingModule } from '@nestjs/testing';
import { companyProviders } from '../company/company.provider';
import { CompanyService } from '../company/company.service';
import { databaseProviders } from '../database/database.providers';
import { userProviders } from './user.provider';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let companyService: CompanyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ...databaseProviders,
        ...userProviders,
        ...companyProviders,
        UserService,
        CompanyService,
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    companyService = module.get<CompanyService>(CompanyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be creating User', async () => {
    expect(service).toBeDefined();
    try {
      await service.create({
        id: 'test',
        companies: await companyService.findAll(),
      });
    } catch (error) {}
  });

  it('should be creating User', async () => {
    expect(service).toBeDefined();
    const data = await service.findAll();
    expect(data.length).toBeGreaterThan(0);
  });

  it('should be  User', async () => {
    expect(service).toBeDefined();
    const data = await service.findOne({ id: 'test' });
    expect(data).toBeDefined();
  });
});
