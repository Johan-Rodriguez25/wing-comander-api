import { ApiProperty } from '@nestjs/swagger/dist';
import { Transform } from 'class-transformer';

export class CreateShipDto {
  @ApiProperty()
  @Transform(({ value }) => value.toLowerCase())
  ship_nation: string;

  @ApiProperty()
  @Transform(({ value }) => value.toLowerCase())
  ship_name: string;

  @ApiProperty()
  @Transform(({ value }) => value.toLowerCase())
  ship_class: string;

  @ApiProperty()
  ship_length: number;

  @ApiProperty()
  maximum_velocity: number;

  @ApiProperty()
  cruise_velocity: number;

  @ApiProperty()
  @Transform(({ value }) => value.toLowerCase())
  acceleration: string;

  @ApiProperty()
  maximum_roll: number;

  @ApiProperty()
  ship_mass: number;

  @ApiProperty()
  ships_weapons: string[];

  @ApiProperty()
  ships_armors: string[];
}
