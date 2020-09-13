import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ENGINE_MODEL } from '../constants';
import { CreateDetectionDto } from './dto/create-detection.dto';
import { Detection } from './interface/detection.interface';

@Injectable()
export class DetectionService {
  constructor(
    @Inject(ENGINE_MODEL)
    private DetectionModel: Model<Detection>,
  ) {}

  create(createDetectionDto: CreateDetectionDto): Promise<Detection> {
    const createdCat = new this.DetectionModel(createDetectionDto);
    return createdCat.save();
  }

  findAll(): Promise<Detection[]> {
    return this.DetectionModel.find().exec();
  }

  findDistinct(filter, field: string): Promise<any> {
    return this.DetectionModel.find(filter).distinct(field).exec();
  }

  findOne(filter): Promise<any> {
    return this.DetectionModel.findOne(filter).exec();
  }

  update(filter, body: any = {}): Promise<any> {
    return this.DetectionModel.findOneAndUpdate(filter, body).exec();
  }

  delete(filter): Promise<any> {
    return this.DetectionModel.findOneAndDelete(filter).exec();
  }
}
