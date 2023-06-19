import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Weapon, WeaponDocument } from './schemas/weapon.schema';
import { CreateWeaponDto } from './dto/create-weapon.dto';
import { UpdateWeaponDto } from './dto/update-weapon.dto';

@Injectable()
export class WeaponsRepository {
  constructor(
    @InjectModel(Weapon.name)
    private weaponModel: Model<WeaponDocument>,
  ) {}

  async getAll(): Promise<Weapon[]> {
    return await this.weaponModel.find();
  }

  async getOne(id: string): Promise<Weapon> {
    return await this.weaponModel.findById(id);
  }

  async getByName(name: string): Promise<Weapon[]> {
    const str = name;
    const regex = new RegExp(str, 'i');

    return await this.weaponModel.find({ weapon_name: regex });
  }

  async createOne(createWeaponDto: CreateWeaponDto): Promise<Weapon> {
    return await new this.weaponModel(createWeaponDto).save();
  }

  async updateOne(
    id: string,
    updateWeaponDto: UpdateWeaponDto,
  ): Promise<Weapon> {
    return await this.weaponModel.findByIdAndUpdate(id, updateWeaponDto, {
      new: true,
    });
  }

  async removeOne(id: string): Promise<Weapon> {
    return await this.weaponModel.findByIdAndDelete(id);
  }
}
