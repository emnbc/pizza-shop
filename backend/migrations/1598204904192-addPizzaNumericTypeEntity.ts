import {MigrationInterface, QueryRunner} from "typeorm";

export class addPizzaNumericTypeEntity1598204904192 implements MigrationInterface {
    name = 'addPizzaNumericTypeEntity1598204904192'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."pizza" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "public"."pizza" ADD "price" real NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."pizza" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "public"."pizza" ADD "price" numeric(8,2) NOT NULL`);
    }

}
