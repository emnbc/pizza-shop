import { Body, Controller, Get, Header, HttpException, HttpStatus, Post, Req, Res, UseInterceptors } from '@nestjs/common';
import { createReadStream, existsSync } from 'fs';
import { Request, Response } from 'express';

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

    @Get('/image')
    async download(@Res() res: Response): Promise<any> {
      if (existsSync('uploads/pizza_01.jpg')) {
        res.set({
          'Content-Type': 'image/jpeg'
        });
        const stream = createReadStream('uploads/pizza_01.jpg');
        stream.pipe(res);
      } else {
        throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
      }
    }
}
