import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type ArmorDocument = Armor & mongoose.Document;

@Schema({ timestamps: true })
export class Armor {
  @Prop({ required: true })
  armor_name: string;
}

export const ArmorSchema = SchemaFactory.createForClass(Armor);
