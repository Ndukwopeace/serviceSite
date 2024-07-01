import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServiceModule } from './service/service.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './providers/database.providers';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions) ,ServiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
