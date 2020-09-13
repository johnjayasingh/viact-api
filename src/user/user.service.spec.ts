import { Test, TestingModule } from '@nestjs/testing';
import { databaseProviders } from '../database/database.providers';
import { UserProviders } from './user.provider';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [...databaseProviders, ...UserProviders, UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be creating User', async () => {
    expect(service).toBeDefined();
    await service.create({
      id: 'test',
    });
  });

  it('should be creating User', async () => {
    expect(service).toBeDefined();
    const data = await service.findAll();
    expect(data.length).toBeGreaterThan(0);
  });

  it('should be delete test User', async () => {
    expect(service).toBeDefined();
    const data = await service.findOne({ id: 'test' });
    expect(data).toBeDefined();
    await service.delete({
      id: data.id,
    });
  });
});
