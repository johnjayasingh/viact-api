import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from './company/company.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, CompanyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
