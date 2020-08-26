import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { Order } from '../../entities/order.entity';
import { OrdersProduct } from '../../entities/orders-product.entity';
import { Pizza } from '../../entities/pizza.entity';
import { PizzasModule } from '../pizzas/pizzas.module';


@Module({
  providers: [OrdersService],
  imports: [
    TypeOrmModule.forFeature([Order, OrdersProduct, Pizza]),
    PizzasModule
  ],
  exports: [OrdersService],
  controllers: [OrdersController]
})
export class OrdersModule {}
