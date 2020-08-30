import { Order } from './order.model';

export class Purchase {
    id: number;
    email: string;
    address: string;
    firstName: string;
    lastName: string;
    deliveryPrice: number;
    date: string;
    products: Order[];
}