import { Module } from '@nestjs/common';
import { EngineController } from './Engine.controller';
import { EngineProviders } from './Engine.provider';
import { EngineService } from './Engine.service';

@Module({
  controllers: [EngineController],
  providers: [EngineService, ...EngineProviders],
})
export class EngineModule {}
