import { Test, TestingModule } from '@nestjs/testing';
import { databaseProviders } from '../database/database.providers';
import { EngineProviders } from './engine.provider';
import { EngineService } from './engine.service';

describe('EngineService', () => {
  let service: EngineService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [...databaseProviders, ...EngineProviders, EngineService],
    }).compile();

    service = module.get<EngineService>(EngineService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should be creating Engine', async () => {
    expect(service).toBeDefined();
    await service.create({
      name: 'Test',
      color: '#FFF',
      id: 'real',
    });
  });

  it('should be creating Engine', async () => {
    expect(service).toBeDefined();
    await service.create({
      name: 'Test',
      color: '#FFF',
      id: 'test',
    });
  });

  it('should be creating Engine', async () => {
    expect(service).toBeDefined();
    const data = await service.findAll();
    expect(data.length).toBeGreaterThan(0);
  });

  it('should be delete test Engine', async () => {
    expect(service).toBeDefined();
    const data = await service.findOne({ id: 'test' });
    expect(data).toBeDefined();
    await service.delete({
      id: data.id,
    });
  });
});
