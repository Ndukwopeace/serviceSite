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
    // find all with their related entity 
    return  this.serviceRepository.find({relations : { location : true}});
  }

   findOne(id: string) : Promise<serviceEntity> {
    return this.serviceRepository.findOne({where: {id} , relations: { location : true}});
  }

   async update(id: string, updateServiceDto: UpdateServiceDto) : Promise<any> {

    try {
    const serviceExist = await this.findOne(id);
      if (!serviceExist) {
        throw new NotFoundException('Service not found');
      }
      return await this.serviceRepository.update({id: serviceExist.id}, updateServiceDto);
      
    } catch (error) {
      console.log(error.message);
      throw new HttpException( "not found",HttpStatus.NOT_FOUND)
    }


      
    
  }

  remove(id: number) {
    return `This action removes a #${id} service`;
  }
}
