import {MigrationInterface, QueryRunner} from "typeorm";

export class addPizzaDoubleTypeEntity1598198959086 implements MigrationInterface {
    name = 'addPizzaDoubleTypeEntity1598198959086'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."pizza" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "public"."pizza" ADD "price" money NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."pizza" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "public"."pizza" ADD "price" integer NOT NULL`);
    }

}
