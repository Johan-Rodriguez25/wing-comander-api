import { ApiProperty } from '@nestjs/swagger/dist';
import { Transform } from 'class-transformer';

export class CreateWeaponDto {
  @ApiProperty()
  @Transform(({ value }) => value.toLowerCase())
  weapon_name: string;
}
