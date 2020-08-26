"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ramekeOrderEntity1598376236170 = void 0;
class ramekeOrderEntity1598376236170 {
    constructor() {
        this.name = 'ramekeOrderEntity1598376236170';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "public"."order" DROP COLUMN "quantity"`);
        await queryRunner.query(`ALTER TABLE "public"."orders_product" ADD "price" real NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."order" ADD "address" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."order" ADD "firstName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."order" ADD "listName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."order" ADD "deliveryPrice" real NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "public"."order" DROP COLUMN "deliveryPrice"`);
        await queryRunner.query(`ALTER TABLE "public"."order" DROP COLUMN "listName"`);
        await queryRunner.query(`ALTER TABLE "public"."order" DROP COLUMN "firstName"`);
        await queryRunner.query(`ALTER TABLE "public"."order" DROP COLUMN "address"`);
        await queryRunner.query(`ALTER TABLE "public"."orders_product" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "public"."order" ADD "quantity" integer NOT NULL`);
    }
}
exports.ramekeOrderEntity1598376236170 = ramekeOrderEntity1598376236170;
//# sourceMappingURL=1598376236170-ramekeOrderEntity.js.map