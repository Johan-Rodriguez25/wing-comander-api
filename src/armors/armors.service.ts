import { Injectable } from '@nestjs/common';
import { ArmorsRepository } from './armors.repository';
import { Armor } from './schemas/armor.schema';
import { CreateArmorDto } from './dto/create-armor.dto';
import { UpdateArmorDto } from './dto/update-armor.dto';

@Injectable()
export class ArmorsService {
  constructor(private readonly armorsRepository: ArmorsRepository) {}

  async getAll(): Promise<Armor[]> {
    return this.armorsRepository.getAll();
  }

  async getOne(id: string): Promise<Armor> {
    return this.armorsRepository.getOne(id);
  }

  async getByName(name: string): Promise<Armor[]> {
    return this.armorsRepository.getByName(name);
  }

  async createOne(createArmorDto: CreateArmorDto): Promise<Armor> {
    return this.armorsRepository.createOne(createArmorDto);
  }

  async updateOne(id: string, updateArmorDto: UpdateArmorDto): Promise<Armor> {
    return this.armorsRepository.updateOne(id, updateArmorDto);
  }

  async removeOne(id: string): Promise<Armor> {
    return this.armorsRepository.removeOne(id);
  }
}
