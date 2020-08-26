import { Controller, Post, Get, Body } from '@nestjs/common';

import { OrdersService } from './orders.service';
import { CreateOrderDto } from '../../dto/create-order.dto';
import { Order } from '../../entities/order.entity';

@Controller('orders')
export class OrdersController {

    constructor(
        private ordersService: OrdersService
    ) { }

    @Post()
    create(@Body() orderData: CreateOrderDto): Promise<Order> {
      return this.ordersService.create(orderData);
    }

    @Get()
    find() {
        return this.ordersService.find();
    }

}
