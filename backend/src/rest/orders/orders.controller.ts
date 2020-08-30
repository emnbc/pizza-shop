import { Controller, Post, Get, Body, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';

import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { OrdersService } from './orders.service';
import { CreateOrderDto } from '../../dto/create-order.dto';
import { Order } from '../../entities/order.entity';
import { User } from '../../entities/user.entity';

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
    @UseGuards(JwtAuthGuard)
    find(@Req() req: Request) {
        return this.ordersService.findUserOrders((req.user as User).email);
    }

}
