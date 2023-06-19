import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Weapon } from 'src/weapons/schemas/weapon.schema';
import { Armor } from 'src/armors/schemas/armor.schema';

export type ShipDocument = Ship & mongoose.Document;

@Schema({ _id: false, versionKey: false })
class ShipsWeapons {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Weapon',
    required: true,
  })
  weapon: Weapon;

  @Prop({ required: true })
  quantity: number;
}

const ShipsWeaponsSchema = SchemaFactory.createForClass(ShipsWeapons);

@Schema({ _id: false, versionKey: false })
class ShipsArmors {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Armor',
    required: true,
  })
  armor: Armor;

  @Prop({ required: true })
  description: string;
}

const ShipsArmorsSchema = SchemaFactory.createForClass(ShipsArmors);

@Schema({ timestamps: true })
export class Ship {
  @Prop({ required: true, enum: ['confederation', 'kilrathi'] })
  ship_nation: string;

  @Prop({ required: true })
  ship_name: string;

  @Prop({ required: true })
  ship_class: string;

  @Prop({ required: true })
  ship_length: number;

  @Prop({ required: true })
  maximum_velocity: number;

  @Prop({ required: true })
  cruise_velocity: number;

  @Prop({ required: true })
  acceleration: string;

  @Prop({ required: true })
  maximum_roll: number;

  @Prop({ required: true })
  ship_mass: number;

  @Prop([{ type: ShipsWeapons }])
  ships_weapons: Weapon[];

  @Prop([{ type: ShipsArmors }])
  ships_armors: Armor[];
}

export const ShipSchema = SchemaFactory.createForClass(Ship);
