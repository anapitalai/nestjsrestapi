import * as mongoose from 'mongoose';

export const PropertySchema = new mongoose.Schema({
  property: String,
  rental:Number
});