import { Controller,Get,Post,Patch,Delete,Put } from '@nestjs/common';

@Controller('stationery')
export class StationeryController {
      
    @Get()
    propertyListing():String{
        return 'All the properties will be listed here';
    }

    @Get()
    singleProperty(){
        return 'All a single property';
    }


    @Post()
    createProperty(){
        return 'a new one was created';
    }


    @Patch()
    updateProperty(){
        return 'Updated';
    }

    @Delete()
    purgeProperty(){
        return 'Removed';
    }

}
