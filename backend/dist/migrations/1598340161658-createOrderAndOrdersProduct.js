"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrderAndOrdersProduct1598340161658 = void 0;
class createOrderAndOrdersProduct1598340161658 {
    constructor() {
        this.name = 'createOrderAndOrdersProduct1598340161658';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "public"."orders_product" ("id" SERIAL NOT NULL, "quantity" integer NOT NULL, "orderId" integer, "productId" integer, CONSTRAINT "REL_402e529c1a1038ff22c3c6f2a5" UNIQUE ("productId"), CONSTRAINT "PK_525e5711ed0c702c5ee13471a1a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "public"."order" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "quantity" integer NOT NULL, CONSTRAINT "PK_d078278acaa299c61deeb86eac5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "public"."orders_product" ADD CONSTRAINT "FK_e4b99e2c66994ee5881aaed791c" FOREIGN KEY ("orderId") REFERENCES "public"."order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "public"."orders_product" ADD CONSTRAINT "FK_402e529c1a1038ff22c3c6f2a5d" FOREIGN KEY ("productId") REFERENCES "public"."pizza"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "public"."orders_product" DROP CONSTRAINT "FK_402e529c1a1038ff22c3c6f2a5d"`);
        await queryRunner.query(`ALTER TABLE "public"."orders_product" DROP CONSTRAINT "FK_e4b99e2c66994ee5881aaed791c"`);
        await queryRunner.query(`DROP TABLE "public"."order"`);
        await queryRunner.query(`DROP TABLE "public"."orders_product"`);
    }
}
exports.createOrderAndOrdersProduct1598340161658 = createOrderAndOrdersProduct1598340161658;
//# sourceMappingURL=1598340161658-createOrderAndOrdersProduct.js.map