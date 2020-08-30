import { Request } from 'express';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from '../../dto/create-order.dto';
import { Order } from '../../entities/order.entity';
export declare class OrdersController {
    private ordersService;
    constructor(ordersService: OrdersService);
    create(orderData: CreateOrderDto): Promise<Order>;
    find(req: Request): Promise<Order[]>;
}
