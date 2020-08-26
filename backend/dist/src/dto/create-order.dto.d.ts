export declare class CreateOrderDto {
    email: string;
    firstName: string;
    lastName: string;
    address: string;
    products: Products[];
}
declare class Products {
    product: number;
    quantity: number;
}
export {};
