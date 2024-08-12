import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    // TODO : Connection to Database
    // MongooseModule.forRoot('mongodb://localhost/nest'),  MongoDB connection string
  ],  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
