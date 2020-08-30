import {MigrationInterface, QueryRunner} from "typeorm";

export class remakeOrdersProductEntity1598637268429 implements MigrationInterface {
    name = 'remakeOrdersProductEntity1598637268429'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."orders_product" DROP CONSTRAINT "FK_402e529c1a1038ff22c3c6f2a5d"`);
        await queryRunner.query(`ALTER TABLE "public"."orders_product" DROP CONSTRAINT "REL_402e529c1a1038ff22c3c6f2a5"`);
        await queryRunner.query(`ALTER TABLE "public"."orders_product" ADD CONSTRAINT "FK_402e529c1a1038ff22c3c6f2a5d" FOREIGN KEY ("productId") REFERENCES "public"."pizza"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."orders_product" DROP CONSTRAINT "FK_402e529c1a1038ff22c3c6f2a5d"`);
        await queryRunner.query(`ALTER TABLE "public"."orders_product" ADD CONSTRAINT "REL_402e529c1a1038ff22c3c6f2a5" UNIQUE ("productId")`);
        await queryRunner.query(`ALTER TABLE "public"."orders_product" ADD CONSTRAINT "FK_402e529c1a1038ff22c3c6f2a5d" FOREIGN KEY ("productId") REFERENCES "public"."pizza"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
