import { Test, TestingModule } from '@nestjs/testing';
import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoggerService],
    }).compile();

    service = module.get<LoggerService>(LoggerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
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
    const data = await service.getAll({});
    expect(data.length).toBeGreaterThan(0);
  });

  it('should be Detection', async () => {
    expect(service).toBeDefined();
    const data = await service.getLatest({ id: 'test' });
    expect(data).toBeDefined();
  });
});
