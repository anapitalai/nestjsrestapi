import { Injectable } from '@nestjs/common';
import {Property} from './interfaces/property.interface';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';

@Injectable()
export class PropertyService {
    constructor(@InjectModel('Property') private readonly propertyModel: Model<Property>) {}
    //create the methods
    async propertyListing():Promise<Property[]>{
     return await this.propertyModel.find();
    }

    async singleProperty(id:string):Promise<Property>{
     return  await this.propertyModel.findOne({_id:id});
    }

    async createProperty(property:Property):Promise<Property>{
        const  newProp=new this.propertyModel(property);

        return await newProp.save();
    }
    async updateProperty(id:string,property:Property):Promise<Property>{
        return await this.propertyModel.findOneAndUpdate(id,property,
            {new:true});

    }

    async deleteProperty(id:string):Promise<Property>{
        return await this.propertyModel.findByIdAndRemove(id);
        
    }
}
