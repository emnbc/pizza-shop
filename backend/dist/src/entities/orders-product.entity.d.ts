import { Order } from './order.entity';
import { Pizza } from './pizza.entity';
export declare class OrdersProduct {
    id: number;
    order: Order;
    product: Pizza;
    quantity: number;
    price: number;
}
