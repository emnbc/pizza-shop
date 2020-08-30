import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { OrdersProduct } from './orders-product.entity';

@Entity()
export class Order {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  address: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @OneToMany(type => OrdersProduct, ordersProduct => ordersProduct.order)
  products: OrdersProduct[];

  @Column({type: "real"})
  deliveryPrice: number;

  @Column({type: "timestamp"})
  date: string;
  
}