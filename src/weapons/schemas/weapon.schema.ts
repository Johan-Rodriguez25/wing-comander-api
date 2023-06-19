import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type WeaponDocument = Weapon & mongoose.Document;

@Schema({ timestamps: true })
export class Weapon {
  @Prop({ required: true })
  weapon_name: string;
}

export const WeaponSchema = SchemaFactory.createForClass(Weapon);
