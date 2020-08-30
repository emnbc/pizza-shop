import { Pizza } from './pizza.model';

export class Order {
    id?: number;
    price?: number;
    product: Pizza;
    quantity: number;
}