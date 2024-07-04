import { Injectable } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { LocationEntity } from './entities/location.entity';
import { Repository } from 'typeorm';

@Injectable()
export class LocationService {
  constructor(@InjectRepository(LocationEntity) private readonly locationRepository: Repository<LocationEntity>){}
  
  create(createLocationDto: CreateLocationDto) {
    const location = this.locationRepository.create(createLocationDto);
    return this.locationRepository.save(location);
  }

  findAll() {
    return this.locationRepository.find({ relations : { servicies : true}});
  }

  findOne(id: string) {
    return this.locationRepository.findOne({where : {id} , relations : { servicies : true}});
  }

  update(id: string, updateLocationDto: UpdateLocationDto) {
    return `This action updates a #${id} location`;
  }

  remove(id: string) {
    return `This action removes a #${id} location`;
  }
}
