import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Query,
  Body,
  UseGuards,
} from '@nestjs/common';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiUnprocessableEntityResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
} from '@nestjs/swagger';
import { CreateWeaponDto } from './dto/create-weapon.dto';
import { UpdateWeaponDto } from './dto/update-weapon.dto';
import { WeaponsService } from './weapons.service';
import { Weapon } from './schemas/weapon.schema';

@ApiBearerAuth()
@ApiTags('Weapons')
@Controller('/api/v1/weapons')
export class WeaponsController {
  constructor(private weaponsService: WeaponsService) {}

  @Get()
  @ApiOkResponse({ description: 'The weapons were returned successfully' })
  @ApiForbiddenResponse({ description: 'Unauthorized request' })
  async getWeapons(): Promise<Weapon[]> {
    return this.weaponsService.getAll();
  }

  @Get(':id')
  @ApiOkResponse({ description: 'The weapon was returned successfully' })
  @ApiForbiddenResponse({ description: 'Unauthorized request' })
  @ApiNotFoundResponse({ description: 'The weapon was not found' })
  async getWeapon(@Param('id') id: string): Promise<Weapon> {
    return this.weaponsService.getOne(id);
  }

  @Get('/name/:name')
  @ApiOkResponse({ description: 'The weapon were returned successfully' })
  @ApiForbiddenResponse({ description: 'Unauthorized request' })
  async getWeaponsByName(@Param('name') name: string): Promise<Weapon[]> {
    return this.weaponsService.getByName(name);
  }

  @Post()
  @ApiCreatedResponse({ description: 'The weapon was created successfully' })
  @ApiUnprocessableEntityResponse({ description: 'Bad request' })
  @ApiForbiddenResponse({ description: 'Unauthorized request' })
  async createWeapon(
    @Body() createWeaponDto: CreateWeaponDto,
  ): Promise<Weapon> {
    return this.weaponsService.createOne(createWeaponDto);
  }

  @Patch(':id')
  @ApiOkResponse({ description: 'The weapon was updated successfully' })
  @ApiNotFoundResponse({ description: 'The weapon not found' })
  @ApiForbiddenResponse({ description: 'Unauthorized request' })
  @ApiUnprocessableEntityResponse({ description: 'Bad request' })
  async updateWeapon(
    @Param('id') id: string,
    @Body() updateWeaponDto: UpdateWeaponDto,
  ): Promise<Weapon> {
    return this.weaponsService.updateOne(id, updateWeaponDto);
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'The weapon was returned successfully' })
  @ApiForbiddenResponse({ description: 'Unauthorized request' })
  @ApiNotFoundResponse({ description: 'The weapon was not found' })
  async removeWeapon(@Param('id') id: string): Promise<Weapon> {
    return this.weaponsService.removeOne(id);
  }
}
