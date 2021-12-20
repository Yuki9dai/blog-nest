import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot('mongodb://101.43.65.197:27017', {
      user: 'blogUser',
      pass: '123456',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
