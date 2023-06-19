import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Armor, ArmorDocument } from './schemas/armor.schema';
import { CreateArmorDto } from './dto/create-armor.dto';
import { UpdateArmorDto } from './dto/update-armor.dto';

@Injectable()
export class ArmorsRepository {
  constructor(
    @InjectModel(Armor.name)
    private armorModel: Model<ArmorDocument>,
  ) {}

  async getAll(): Promise<Armor[]> {
    return await this.armorModel.find();
  }

  async getOne(id: string): Promise<Armor> {
    return await this.armorModel.findById(id);
  }

  async getByName(name: string): Promise<Armor[]> {
    const str = name;
    const regex = new RegExp(str, 'i');

    return await this.armorModel.find({ armor_name: regex });
  }

  async createOne(createArmorDto: CreateArmorDto): Promise<Armor> {
    return await new this.armorModel(createArmorDto).save();
  }

  async updateOne(id: string, updateArmorDto: UpdateArmorDto): Promise<Armor> {
    return await this.armorModel.findByIdAndUpdate(id, updateArmorDto, {
      new: true,
    });
  }

  async removeOne(id: string): Promise<Armor> {
    return await this.armorModel.findByIdAndDelete(id);
  }
}
