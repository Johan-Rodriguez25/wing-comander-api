import { Module } from '@nestjs/common';
import { Weapon, WeaponSchema } from './schemas/weapon.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { WeaponsRepository } from './weapons.repository';
import { WeaponsService } from './weapons.service';
import { WeaponsController } from './weapons.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Weapon.name, schema: WeaponSchema }]),
  ],
  providers: [WeaponsService, WeaponsRepository],
  controllers: [WeaponsController],
})
export class WeaponsModule {}
