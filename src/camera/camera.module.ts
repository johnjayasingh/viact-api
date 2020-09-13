import { Module } from '@nestjs/common';
import { CameraController } from './camera.controller';
import { CameraProviders } from './camera.provider';
import { CameraService } from './camera.service';

@Module({
  controllers: [CameraController],
  providers: [CameraService, ...CameraProviders],
})
export class CameraModule {}
