import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CameraModule } from './camera/camera.module';
import { CompanyModule } from './company/company.module';
import { DatabaseModule } from './database/database.module';
import { EngineModule } from './engine/engine.module';
import { LoggerModule } from './logger/logger.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    DatabaseModule,
    CompanyModule,
    EngineModule,
    UserModule,
    CameraModule,
    LoggerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
