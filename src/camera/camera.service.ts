import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CAMERA_MODEL } from '../constants';
import { CreateCameraDto } from './dto/create-camera.dto';
import { Camera } from './interface/camera.interface';

@Injectable()
export class CameraService {
  constructor(
    @Inject(CAMERA_MODEL)
    private CameraModel: Model<Camera>,
  ) {}

  create(createCameraDto: CreateCameraDto): Promise<Camera> {
    const createdCat = new this.CameraModel(createCameraDto);
    return createdCat.save();
  }

  findAll(): Promise<Camera[]> {
    return this.CameraModel.find().exec();
  }

  findDistinct(filter, field: string): Promise<any> {
    return this.CameraModel.find(filter).distinct(field).exec();
  }

  findOne(filter): Promise<any> {
    return this.CameraModel.findOne(filter).exec();
  }

  update(filter, body: any = {}): Promise<any> {
    return this.CameraModel.findOneAndUpdate(filter, body).exec();
  }

  delete(filter): Promise<any> {
    return this.CameraModel.findOneAndDelete(filter).exec();
  }
}
