import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './company/company.module';
import { DatabaseModule } from './database/database.module';
import { EngineModule } from './engine/engine.module';

@Module({
  imports: [DatabaseModule, CompanyModule, EngineModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
