import { MigrationInterface, QueryRunner } from "typeorm";
export declare class addDateToOrder1598794824865 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
