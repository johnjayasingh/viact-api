import { Module } from '@nestjs/common';
import { EngineController } from './Engine.controller';
import { engineProviders } from './Engine.provider';
import { EngineService } from './Engine.service';

@Module({
  controllers: [EngineController],
  providers: [EngineService, ...engineProviders],
})
export class EngineModule {}
