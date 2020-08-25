import { OrdersProduct } from './orders-product.entity';
export declare class Order {
    id: number;
    email: string;
    address: string;
    firstName: string;
    lastName: string;
    products: OrdersProduct[];
    deliveryPrice: number;
}
