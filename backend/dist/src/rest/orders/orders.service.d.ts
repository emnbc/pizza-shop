import { Repository } from 'typeorm';
import { OrdersProduct } from '../../entities/orders-product.entity';
import { Order } from '../../entities/order.entity';
import { Pizza } from '../../entities/pizza.entity';
import { CreateOrderDto } from '../../dto/create-order.dto';
import { PizzasService } from '../pizzas/pizzas.service';
export declare class OrdersService {
    private pizzasService;
    private readonly orderRepository;
    private readonly ordersProductRepository;
    private readonly pizzaRepository;
    constructor(pizzasService: PizzasService, orderRepository: Repository<Order>, ordersProductRepository: Repository<OrdersProduct>, pizzaRepository: Repository<Pizza>);
    private getPizzaPrice;
    private getDeliveryPrice;
    create(orderData: CreateOrderDto): Promise<Order>;
    findUserOrders(email: string): Promise<Order[]>;
}
