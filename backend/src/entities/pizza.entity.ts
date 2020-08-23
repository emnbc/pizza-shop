import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pizza {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  img: string;

  @Column()
  count: number;

  @Column({type: "money"})
  price: number;
  
}