import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PizzasController } from './pizzas.controller';
import { PizzasService } from './pizzas.service';
import { Pizza } from '../../entities/pizza.entity';

@Module({
  controllers: [PizzasController],
  imports: [TypeOrmModule.forFeature([Pizza])],
  exports: [PizzasService],
  providers: [PizzasService]
})
export class PizzasModule {}
