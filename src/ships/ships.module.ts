import { Module } from '@nestjs/common';
import { ShipsService } from './ships.service';
import { ShipsController } from './ships.controller';
import { ShipsRepository } from './ships.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Ship, ShipSchema } from './schemas/ship.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Ship.name, schema: ShipSchema }]),
  ],
  providers: [ShipsService, ShipsRepository],
  controllers: [ShipsController],
})
export class ShipsModule {}
