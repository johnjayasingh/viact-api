import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ENGINE_MODEL } from '../constants';
import { CreateEngineDto } from './dto/create-engine.dto';
import { Engine } from './interface/engine.interface';

@Injectable()
export class EngineService {
  constructor(
    @Inject(ENGINE_MODEL)
    private EngineModel: Model<Engine>,
  ) {}

  create(createEngineDto: CreateEngineDto): Promise<Engine> {
    const createdCat = new this.EngineModel(createEngineDto);
    return createdCat.save();
  }

  findAll(): Promise<Engine[]> {
    return this.EngineModel.find().exec();
  }

  findDistinct(filter, field: string): Promise<any> {
    return this.EngineModel.find(filter).distinct(field).exec();
  }

  findOne(filter): Promise<any> {
    return this.EngineModel.findOne(filter).exec();
  }

  update(filter, body: any = {}): Promise<any> {
    return this.EngineModel.findOneAndUpdate(filter, body).exec();
  }

  delete(filter): Promise<any> {
    return this.EngineModel.findOneAndDelete(filter).exec();
  }
}
