import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { OrdersProduct } from '../../entities/orders-product.entity';
import { Order } from '../../entities/order.entity';
import { Pizza } from '../../entities/pizza.entity';
import { CreateOrderDto } from '../../dto/create-order.dto';
import { PizzasService } from '../pizzas/pizzas.service';

const deliveryPrice: number = 2.99;

@Injectable()
export class OrdersService {

    constructor(
        private pizzasService: PizzasService,
        @InjectRepository(Order)
        private readonly orderRepository: Repository<Order>,
        @InjectRepository(OrdersProduct)
        private readonly ordersProductRepository: Repository<OrdersProduct>,
        @InjectRepository(Pizza)
        private readonly pizzaRepository: Repository<Pizza>
    ) { }

    private async getPizzaPrice(id: number) {
        const pizza = await this.pizzasService.findById(id);
        return pizza.price;
    }

    private getDeliveryPrice() {
        return deliveryPrice;
    }

    async create(orderData: CreateOrderDto) {

        const products = [];

        for(const el of orderData.products) {
            const pizza = this.pizzaRepository.create({id: el.product});
            const price = await this.getPizzaPrice(el.product);
            products.push(this.ordersProductRepository.create({
                product: pizza,
                quantity: el.quantity,
                price: price
            }));
        }

        // orderData.products.forEach(async (el) => {
        //     const pizza = this.pizzaRepository.create({id: el.product});
        //     const price = await this.getPizzaPrice(el.product);
        //     products.push(this.ordersProductRepository.create({
        //         product: pizza,
        //         quantity: el.quantity,
        //         price: price
        //     }));
        // });

        try {
            await this.ordersProductRepository.save(products);
        } catch (err) {
            throw new InternalServerErrorException(err);
        }

        console.log(products);

        const order = this.orderRepository.create({
            email: orderData.email,
            firstName: orderData.firstName,
            lastName: orderData.lastName,
            address: orderData.address,
            products: products,
            deliveryPrice: this.getDeliveryPrice()
        });

        try {
            return await this.orderRepository.save(order);
        } catch (err) {
            throw new InternalServerErrorException(err);
        }

    }

    async find(): Promise<Order[]> {
        return await this.orderRepository.find({relations: ["products", "products.product"]});
    }

}
