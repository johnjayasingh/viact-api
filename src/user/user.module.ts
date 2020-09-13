import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserProviders } from './user.provider';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService, ...UserProviders],
})
export class UserModule {}
