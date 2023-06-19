import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ship, ShipDocument } from './schemas/ship.schema';
import { CreateShipDto } from './dto/create-ship.dto';
import { UpdateShipDto } from './dto/update-ship.dto';

@Injectable()
export class ShipsRepository {
  constructor(
    @InjectModel(Ship.name)
    private shipModel: Model<ShipDocument>,
  ) {}

  async getAll(): Promise<Ship[]> {
    return await this.shipModel
      .find()
      .populate({
        path: 'ships_weapons',
        select: 'weapon_name quantity -_id',
        populate: {
          path: 'weapon',
          select: 'weapon_name -_id',
        },
      })
      .populate({
        path: 'ships_armors',
        select: 'armor_name description -_id',
        populate: {
          path: 'armor',
          select: 'armor_name -_id',
        },
      });
  }

  async getOne(id: string): Promise<Ship> {
    return await this.shipModel
      .findById(id)
      .populate({
        path: 'ships_weapons',
        select: 'weapon_name quantity -_id',
        populate: {
          path: 'weapon',
          select: 'weapon_name -_id',
        },
      })
      .populate({
        path: 'ships_armors',
        select: 'armor_name description -_id',
        populate: {
          path: 'armor',
          select: 'armor_name -_id',
        },
      });
  }

  async getByNation(nation: string): Promise<Ship[]> {
    const str = nation;
    const regex = new RegExp(str, 'i');

    return await this.shipModel
      .find({ ship_nation: regex })
      .populate({
        path: 'ships_weapons',
        select: 'weapon_name quantity -_id',
        populate: {
          path: 'weapon',
          select: 'weapon_name -_id',
        },
      })
      .populate({
        path: 'ships_armors',
        select: 'armor_name description -_id',
        populate: {
          path: 'armor',
          select: 'armor_name -_id',
        },
      });
  }

  async getByName(ship_class: string): Promise<Ship[]> {
    const str = ship_class;
    const regex = new RegExp(str, 'i');

    return await this.shipModel
      .find({ ship_class: regex })
      .populate({
        path: 'ships_weapons',
        select: 'weapon_name quantity -_id',
        populate: {
          path: 'weapon',
          select: 'weapon_name -_id',
        },
      })
      .populate({
        path: 'ships_armors',
        select: 'armor_name description -_id',
        populate: {
          path: 'armor',
          select: 'armor_name -_id',
        },
      });
  }

  async getByClass(name: string): Promise<Ship[]> {
    const str = name;
    const regex = new RegExp(str, 'i');

    return await this.shipModel
      .find({ ship_class: regex })
      .populate({
        path: 'ships_weapons',
        select: 'weapon_name quantity -_id',
        populate: {
          path: 'weapon',
          select: 'weapon_name -_id',
        },
      })
      .populate({
        path: 'ships_armors',
        select: 'armor_name description -_id',
        populate: {
          path: 'armor',
          select: 'armor_name -_id',
        },
      });
  }

  async createOne(createShipDto: CreateShipDto): Promise<Ship> {
    return await new this.shipModel(createShipDto).save();
  }

  async updateOne(id: string, updateShipDto: UpdateShipDto): Promise<Ship> {
    return await this.shipModel.findByIdAndUpdate(id, updateShipDto, {
      new: true,
    });
  }

  async removeOne(id: string): Promise<Ship> {
    return await this.shipModel.findByIdAndDelete(id);
  }
}
