import { Injectable } from '@nestjs/common';
import { ShipsRepository } from './ships.repository';
import { Ship } from './schemas/ship.schema';
import { CreateShipDto } from './dto/create-ship.dto';
import { UpdateShipDto } from './dto/update-ship.dto';

@Injectable()
export class ShipsService {
  constructor(private readonly shipsRepository: ShipsRepository) {}

  async getAll(): Promise<Ship[]> {
    return this.shipsRepository.getAll();
  }

  async getOne(id: string): Promise<Ship> {
    return this.shipsRepository.getOne(id);
  }

  async getByNation(nation: string): Promise<Ship[]> {
    return this.shipsRepository.getByNation(nation);
  }

  async getByName(name: string): Promise<Ship[]> {
    return this.shipsRepository.getByName(name);
  }

  async getByClass(ship_class: string): Promise<Ship[]> {
    return this.shipsRepository.getByClass(ship_class);
  }

  async createOne(createShipDto: CreateShipDto): Promise<Ship> {
    return this.shipsRepository.createOne(createShipDto);
  }

  async updateOne(id: string, updateShipDto: UpdateShipDto): Promise<Ship> {
    return this.shipsRepository.updateOne(id, updateShipDto);
  }

  async removeOne(id: string): Promise<Ship> {
    return this.shipsRepository.removeOne(id);
  }
}
