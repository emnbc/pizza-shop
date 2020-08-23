import { MigrationInterface, QueryRunner } from "typeorm";
export declare class addPizzaNumericTypeEntity1598204904192 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
