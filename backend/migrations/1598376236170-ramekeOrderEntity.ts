import {MigrationInterface, QueryRunner} from "typeorm";

export class ramekeOrderEntity1598376236170 implements MigrationInterface {
    name = 'ramekeOrderEntity1598376236170'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."order" DROP COLUMN "quantity"`);
        await queryRunner.query(`ALTER TABLE "public"."orders_product" ADD "price" real NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."order" ADD "address" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."order" ADD "firstName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."order" ADD "listName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."order" ADD "deliveryPrice" real NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."order" DROP COLUMN "deliveryPrice"`);
        await queryRunner.query(`ALTER TABLE "public"."order" DROP COLUMN "listName"`);
        await queryRunner.query(`ALTER TABLE "public"."order" DROP COLUMN "firstName"`);
        await queryRunner.query(`ALTER TABLE "public"."order" DROP COLUMN "address"`);
        await queryRunner.query(`ALTER TABLE "public"."orders_product" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "public"."order" ADD "quantity" integer NOT NULL`);
    }

}
