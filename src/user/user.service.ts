import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { USER_MODEL } from '../constants';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './interface/user.interface';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_MODEL)
    private UserModel: Model<User>,
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    const createdCat = new this.UserModel(createUserDto);
    return createdCat.save();
  }

  findAll(): Promise<User[]> {
    return this.UserModel.find().exec();
  }

  findDistinct(filter, field: string): Promise<any> {
    return this.UserModel.find(filter).distinct(field).exec();
  }

  findOne(filter): Promise<any> {
    return this.UserModel.findOne(filter).exec();
  }

  update(filter, body: any = {}): Promise<any> {
    return this.UserModel.findOneAndUpdate(filter, body).exec();
  }

  delete(filter): Promise<any> {
    return this.UserModel.findOneAndDelete(filter).exec();
  }
}
