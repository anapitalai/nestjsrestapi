import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PropertiesController } from './properties.controller';
import { PropertyService } from './property.service';
import {PropertySchema} from './schemas/property.schema';



@Module({
  imports: [MongooseModule.forFeature([{ name: 'Property', schema: PropertySchema }])],
  controllers: [PropertiesController],
  providers: [PropertyService],
})
export class PropertyModule {}
