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
import { CreateShipDto } from './dto/create-ship.dto';
import { UpdateShipDto } from './dto/update-ship.dto';
import { ShipsService } from './ships.service';
import { Ship } from './schemas/ship.schema';

@ApiBearerAuth()
@ApiTags('Ships')
@Controller('/api/v1/ships')
export class ShipsController {
  constructor(private shipsService: ShipsService) {}

  @Get()
  @ApiOkResponse({ description: 'The ships were returned successfully' })
  @ApiForbiddenResponse({ description: 'Unauthorized request' })
  async getShips(): Promise<Ship[]> {
    return this.shipsService.getAll();
  }

  @Get(':id')
  @ApiOkResponse({ description: 'The ship was returned successfully' })
  @ApiForbiddenResponse({ description: 'Unauthorized request' })
  @ApiNotFoundResponse({ description: 'The ship was not found' })
  async getShip(@Param('id') id: string): Promise<Ship> {
    return this.shipsService.getOne(id);
  }

  @Get('/nation/:nation')
  @ApiOkResponse({ description: 'The ships were returned successfully' })
  @ApiForbiddenResponse({ description: 'Unauthorized request' })
  async getShipsByNation(@Param('nation') nation: string): Promise<Ship[]> {
    return this.shipsService.getByNation(nation);
  }

  @Get('/name/:name')
  @ApiOkResponse({ description: 'The ships were returned successfully' })
  @ApiForbiddenResponse({ description: 'Unauthorized request' })
  async getShipsByName(@Param('name') name: string): Promise<Ship[]> {
    return this.shipsService.getByName(name);
  }

  @Get('/class/:ship_class')
  @ApiOkResponse({ description: 'The ships were returned successfully' })
  @ApiForbiddenResponse({ description: 'Unauthorized request' })
  async getShipsByClass(
    @Param('ship_class') ship_class: string,
  ): Promise<Ship[]> {
    return this.shipsService.getByClass(ship_class);
  }

  @Post()
  @ApiCreatedResponse({ description: 'The ship was created successfully' })
  @ApiUnprocessableEntityResponse({ description: 'Bad request' })
  @ApiForbiddenResponse({ description: 'Unauthorized request' })
  async createShip(@Body() createShipDto: CreateShipDto): Promise<Ship> {
    return this.shipsService.createOne(createShipDto);
  }

  @Patch(':id')
  @ApiOkResponse({ description: 'The ship was updated successfully' })
  @ApiNotFoundResponse({ description: 'The ship not found' })
  @ApiForbiddenResponse({ description: 'Unauthorized request' })
  @ApiUnprocessableEntityResponse({ description: 'Bad request' })
  async updateShip(
    @Param('id') id: string,
    @Body() updateShipDto: UpdateShipDto,
  ): Promise<Ship> {
    return this.shipsService.updateOne(id, updateShipDto);
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'The ship was returned successfully' })
  @ApiForbiddenResponse({ description: 'Unauthorized request' })
  @ApiNotFoundResponse({ description: 'The ship was not found' })
  async removeShip(@Param('id') id: string): Promise<Ship> {
    return this.shipsService.removeOne(id);
  }
}
