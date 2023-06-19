import { Module } from '@nestjs/common';
import { ArmorsService } from './armors.service';
import { ArmorsRepository } from './armors.repository';
import { ArmorsController } from './armors.controller';
import { Armor, ArmorSchema } from './schemas/armor.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Armor.name, schema: ArmorSchema }]),
  ],
  providers: [ArmorsService, ArmorsRepository],
  controllers: [ArmorsController],
})
export class ArmorsModule {}
