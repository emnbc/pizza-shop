export class CreateOrderDto {
    email: string;
    firstName: string;
    lastName: string;
    address: string;
    products: Products[];
}

class Products {
    product: number;
    quantity: number;
}