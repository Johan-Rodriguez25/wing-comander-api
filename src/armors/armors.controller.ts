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
import { CreateArmorDto } from './dto/create-armor.dto';
import { UpdateArmorDto } from './dto/update-armor.dto';
import { ArmorsService } from './armors.service';
import { Armor } from './schemas/armor.schema';

@ApiBearerAuth()
@ApiTags('Armors')
@Controller('/api/v1/armors')
export class ArmorsController {
  constructor(private armorsService: ArmorsService) {}

  @Get()
  @ApiOkResponse({ description: 'The armors were returned successfully' })
  @ApiForbiddenResponse({ description: 'Unauthorized request' })
  async getArmors(): Promise<Armor[]> {
    return this.armorsService.getAll();
  }

  @Get(':id')
  @ApiOkResponse({ description: 'The armor was returned successfully' })
  @ApiForbiddenResponse({ description: 'Unauthorized request' })
  @ApiNotFoundResponse({ description: 'The armor was not found' })
  async getArmor(@Param('id') id: string): Promise<Armor> {
    return this.armorsService.getOne(id);
  }

  @Get('/name/:name')
  @ApiOkResponse({ description: 'The armor were returned successfully' })
  @ApiForbiddenResponse({ description: 'Unauthorized request' })
  async getArmorsByName(@Param('name') name: string): Promise<Armor[]> {
    return this.armorsService.getByName(name);
  }

  @Post()
  @ApiCreatedResponse({ description: 'The armor was created successfully' })
  @ApiUnprocessableEntityResponse({ description: 'Bad request' })
  @ApiForbiddenResponse({ description: 'Unauthorized request' })
  async createArmor(@Body() createArmorDto: CreateArmorDto): Promise<Armor> {
    return this.armorsService.createOne(createArmorDto);
  }

  @Patch(':id')
  @ApiOkResponse({ description: 'The armor was updated successfully' })
  @ApiNotFoundResponse({ description: 'The armor not found' })
  @ApiForbiddenResponse({ description: 'Unauthorized request' })
  @ApiUnprocessableEntityResponse({ description: 'Bad request' })
  async updateArmor(
    @Param('id') id: string,
    @Body() updateArmorDto: UpdateArmorDto,
  ): Promise<Armor> {
    return this.armorsService.updateOne(id, updateArmorDto);
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'The armor was returned successfully' })
  @ApiForbiddenResponse({ description: 'Unauthorized request' })
  @ApiNotFoundResponse({ description: 'The armor was not found' })
  async removeArmor(@Param('id') id: string): Promise<Armor> {
    return this.armorsService.removeOne(id);
  }
}
