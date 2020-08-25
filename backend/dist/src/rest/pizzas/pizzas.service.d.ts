import { Repository } from 'typeorm';
import { Pizza } from '../../entities/pizza.entity';
import { CreatePizzaDto } from '../../dto/create-pizza.dto';
export declare class PizzasService {
    private readonly pizzasRepository;
    constructor(pizzasRepository: Repository<Pizza>);
    create(pizzaData: CreatePizzaDto): Promise<any>;
    findAll(qs: QuerySelecting): Promise<QueryResult>;
    findById(id: number): Promise<Pizza>;
}
