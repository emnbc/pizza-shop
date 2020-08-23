import { Request } from 'express';
import { Pizza } from '../../entities/pizza.entity';
import { CreatePizzaDto } from '../../dto/create-pizza.dto';
import { PizzasService } from './pizzas.service';
export declare class PizzasController {
    private readonly pizzasService;
    constructor(pizzasService: PizzasService);
    create(pizzaData: CreatePizzaDto): Promise<Pizza>;
    findAll(req: Request): Promise<any>;
}
