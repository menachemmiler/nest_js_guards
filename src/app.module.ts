import { Module } from '@nestjs/common';
import { UsersController } from './app.controller';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [],
})
export class AppModule {}
