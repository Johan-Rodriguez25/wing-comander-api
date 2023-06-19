import { Injectable } from '@nestjs/common';
import { WeaponsRepository } from './weapons.repository';
import { Weapon } from './schemas/weapon.schema';
import { CreateWeaponDto } from './dto/create-weapon.dto';
import { UpdateWeaponDto } from './dto/update-weapon.dto';

@Injectable()
export class WeaponsService {
  constructor(private readonly weaponsRepository: WeaponsRepository) {}

  async getAll(): Promise<Weapon[]> {
    return this.weaponsRepository.getAll();
  }

  async getOne(id: string): Promise<Weapon> {
    return this.weaponsRepository.getOne(id);
  }

  async getByName(name: string): Promise<Weapon[]> {
    return this.weaponsRepository.getByName(name);
  }

  async createOne(createWeaponDto: CreateWeaponDto): Promise<Weapon> {
    return this.weaponsRepository.createOne(createWeaponDto);
  }

  async updateOne(
    id: string,
    updateWeaponDto: UpdateWeaponDto,
  ): Promise<Weapon> {
    return this.weaponsRepository.updateOne(id, updateWeaponDto);
  }

  async removeOne(id: string): Promise<Weapon> {
    return this.weaponsRepository.removeOne(id);
  }
}
