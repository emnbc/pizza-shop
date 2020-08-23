import { Body, Controller, Get, Post, Req, UseInterceptors } from '@nestjs/common';
import { Request } from 'express';

import { Pizza } from '../../entities/pizza.entity';
import { CreatePizzaDto } from '../../dto/create-pizza.dto';
import { PizzasService } from './pizzas.service';
import { QueryResultInterceptor } from '../../interceptors/qr.interceptor';

@Controller('pizzas')
export class PizzasController {

    constructor(
        private readonly pizzasService: PizzasService
    ) {}

    @Post()
    create(@Body() pizzaData: CreatePizzaDto): Promise<Pizza> {
      return this.pizzasService.create(pizzaData);
    }

    @UseInterceptors(QueryResultInterceptor)
    @Get()
    findAll(@Req() req: Request): Promise<any> {
      return this.pizzasService.findAll(req.qs);
    }
}
