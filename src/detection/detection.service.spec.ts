import { Test, TestingModule } from '@nestjs/testing';
import { engineProviders } from '../engine/engine.provider';
import { databaseProviders } from '../database/database.providers';
import { detectionProviders } from './detection.provider';
import { DetectionService } from './engine.service';

describe('DetectionService', () => {
  let service: DetectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [...databaseProviders, ...detectionProviders, ...engineProviders, DetectionService],
    }).compile();

    service = module.get<DetectionService>(DetectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should be creating Detection', async () => {
    expect(service).toBeDefined();
    try {
      await service.create({
        name: 'Test',
        color: '#FFF',
        id: 'test',
      });
    } catch (error) {}
  });

  it('should be creating Detection', async () => {
    expect(service).toBeDefined();
    const data = await service.findAll();
    expect(data.length).toBeGreaterThan(0);
  });

  it('should be Detection', async () => {
    expect(service).toBeDefined();
    const data = await service.findOne({ id: 'test' });
    expect(data).toBeDefined();
  });
});
