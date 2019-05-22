import { Controller,Get,Put,Delete,Post,Patch,Body,Param } from '@nestjs/common';
import {CreatePropertiesDto} from './dto/createProperties.dto';
import {Property} from './interfaces/property.interface';
import {PropertyService} from './property.service';
import {PropertyModule} from './property.module';


@Controller('properties')
export class PropertiesController {
  constructor( private readonly propertyService:PropertyService){}

    @Get()
   async propertyListing():Promise<Property[]>{
        return this.propertyService.propertyListing();
    }

    @Get(':id')
   async singleProperty(@Param('id') id):Promise<Property>{
        return this.propertyService.singleProperty(id);
    }


    @Post()
     async createProperty(@Body() createPropertiesDto:CreatePropertiesDto):Promise<Property>{
        return this.propertyService.createProperty(createPropertiesDto);
    }


    @Put(':id')
    updateProperty(@Body() createPropertiesDto:CreatePropertiesDto,@Param('id') id):Promise<Property>{
        return this.propertyService.updateProperty(id,createPropertiesDto);
    }

    @Delete(':id')
    deleteProperty(@Param('id') id):Promise<Property>{
        return this.propertyService.deleteProperty(id);
    }





}
