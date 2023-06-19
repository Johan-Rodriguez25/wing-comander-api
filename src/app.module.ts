import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ShipsModule } from './ships/ships.module';
import { DatabaseModule } from './database/database.module';
import { WeaponsModule } from './weapons/weapons.module';
import { ArmorsModule } from './armors/armors.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ShipsModule,
    DatabaseModule,
    WeaponsModule,
    ArmorsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
