import { MigrationInterface, QueryRunner } from "typeorm";
export declare class RemoveUsername1597926839873 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
