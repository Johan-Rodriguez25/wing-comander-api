import { ApiProperty } from '@nestjs/swagger/dist';
import { Transform } from 'class-transformer';

export class CreateArmorDto {
  @ApiProperty()
  @Transform(({ value }) => value.toLowerCase())
  armor_name: string;
}
