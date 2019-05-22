import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {MongooseModule} from '@nestjs/mongoose';
import { AppService } from './app.service';
import { StationeryController } from './stationery/stationery.controller';
import { PropertiesController } from './properties/properties.controller';
import { PropertyService } from './properties/property.service';
import { Property } from './properties/interfaces/property.interface';
import { PropertyModule } from './properties/property.module';
import config from './config/keys';



@Module({
  imports: [PropertyModule,MongooseModule.forRoot(config.mongoURI),
   // MulterModule.register({
   //   'dest':'./uploads'
    //}
  //  )
  ],
  controllers: [AppController,StationeryController,PropertiesController],
  providers: [AppService,PropertyService],
  exports:[]
})
export class AppModule {}
