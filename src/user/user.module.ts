import { Module } from '@nestjs/common';
import { UserController } from './User.controller';
import { UserProviders } from './User.provider';
import { UserService } from './User.service';

@Module({
  controllers: [UserController],
  providers: [UserService, ...UserProviders],
})
export class UserModule {}
