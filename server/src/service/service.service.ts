import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Repository } from 'typeorm';
import { serviceEntity } from './entities/service.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ServiceService {
  constructor (@InjectRepository(serviceEntity) private readonly serviceRepository : Repository<serviceEntity>){}

   create(createServiceDto: CreateServiceDto) {
    const newService = this.serviceRepository.create(createServiceDto)
    return  this.serviceRepository.save(newService);
  }

   findAll() {
    return  this.serviceRepository.find();
  }

   findOne(id: string) : Promise<serviceEntity> {
    return this.serviceRepository.findOneBy({id});
  }

   async update(id: string, updateServiceDto: UpdateServiceDto) : Promise<any> {

    try {
    let serviceExist = this.findOne(id);
      if (!serviceExist) {
        throw new NotFoundException('Service not found');
      }
      return this.serviceRepository.update({id: `${id}` }, updateServiceDto)
    } catch (error) {
      throw new HttpException( "not found",HttpStatus.NOT_FOUND)
    }


      
    
  }

  remove(id: number) {
    return `This action removes a #${id} service`;
  }
}
