import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerController } from './logger.controller';
import { LoggerService } from './logger.service';
import { Log, LogSchema } from './schemas/log';

@Module({
  imports: [MongooseModule.forFeature([{ name: Log.name, schema: LogSchema }])],
  controllers: [LoggerController],
  exports: [LoggerService],
  providers: [LoggerService],
})
export class LoggerModule {}
