import { Module } from '@nestjs/common';
import { DetectionController } from './detection.controller';
import { detectionProviders } from './detection.provider';
import { DetectionService } from './engine.service';

@Module({
  controllers: [DetectionController],
  providers: [DetectionService, ...detectionProviders],
})
export class DetectionModule {}
