import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Query } from 'mongoose';
import { Log } from './schemas/log';

@Injectable()
export class LoggerService {
  private logger: Logger = new Logger('CliffDetectionService');

  constructor(@InjectModel(Log.name) private model: Model<Log>) {}

  async create(payload: any): Promise<any> {
    const count = await this.getCount({
      type: payload.type,
      companyCode: payload.companyCode,
    });

    payload.alertId =
      payload.type.substr(0, 2).toUpperCase() +
      '_' +
      `00000${(count || 0) + 1}`.slice(-6);

    const log = new this.model(payload);
    return log.save().then(() => ({ message: 'Action Logged' }));
  }

  getAll(filter, sort = { timestamp: -1 }): Promise<Log[]> {
    return this.model.find(filter).sort(sort).exec();
  }

  getCount(filter): Query<number> {
    return this.model.count(filter);
  }

  getLatest(filter): Promise<Log> {
    return this.model.findOne(filter).sort({ timestamp: -1 }).exec();
  }
}
