import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne, JoinColumn } from 'typeorm';
import { Order } from './order.entity';
import { Pizza } from './pizza.entity';

@Entity()
export class OrdersProduct {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Order, order => order.products)
  order: Order;

  @ManyToOne(typy => Pizza)
  product: Pizza;

  @Column()
  quantity: number;

  @Column({type: "real"})
  price: number;
  
}