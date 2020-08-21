import { Repository } from 'typeorm';
import { CreateUserDto } from '../../dto/create-user.dto';
import { User } from '../../entities/user.entity';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<User>);
    create(userData: CreateUserDto): Promise<any>;
    findAll(qs: QuerySelecting): Promise<QueryResult>;
    findOne(id: number): Promise<User>;
    findUser(email: string): Promise<User>;
    remove(id: number): Promise<void>;
}
