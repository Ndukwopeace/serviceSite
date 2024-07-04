import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServiceModule } from './service/service.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './providers/database.providers';
import { CategoryModule } from './category/category.module';
import { LocationModule } from './location/location.module';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions) ,ServiceModule, CategoryModule, LocationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
