import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Pizza } from '../../entities/pizza.entity';
import { CreatePizzaDto } from '../../dto/create-pizza.dto';

@Injectable()
export class PizzasService {

    constructor(
        @InjectRepository(Pizza)
        private readonly pizzasRepository: Repository<Pizza>
      ) { }

    async create(pizzaData: CreatePizzaDto): Promise<any> {

        const pizza = this.pizzasRepository.create(pizzaData);
    
        try {
          return await this.pizzasRepository.save(pizza);
        } catch (err) {
          throw new InternalServerErrorException();
        }
    }

    async findAll(qs: QuerySelecting): Promise<QueryResult> {
        return {
          count: await this.pizzasRepository.count({ ...qs.where }),
          result: await this.pizzasRepository.find({ ...qs })
        };
    }

    async findById(id: number) {
      return await this.pizzasRepository.findOne(id);
    }

}
