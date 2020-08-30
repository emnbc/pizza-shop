"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remakeOrdersProductEntity1598637268429 = void 0;
class remakeOrdersProductEntity1598637268429 {
    constructor() {
        this.name = 'remakeOrdersProductEntity1598637268429';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "public"."orders_product" DROP CONSTRAINT "FK_402e529c1a1038ff22c3c6f2a5d"`);
        await queryRunner.query(`ALTER TABLE "public"."orders_product" DROP CONSTRAINT "REL_402e529c1a1038ff22c3c6f2a5"`);
        await queryRunner.query(`ALTER TABLE "public"."orders_product" ADD CONSTRAINT "FK_402e529c1a1038ff22c3c6f2a5d" FOREIGN KEY ("productId") REFERENCES "public"."pizza"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "public"."orders_product" DROP CONSTRAINT "FK_402e529c1a1038ff22c3c6f2a5d"`);
        await queryRunner.query(`ALTER TABLE "public"."orders_product" ADD CONSTRAINT "REL_402e529c1a1038ff22c3c6f2a5" UNIQUE ("productId")`);
        await queryRunner.query(`ALTER TABLE "public"."orders_product" ADD CONSTRAINT "FK_402e529c1a1038ff22c3c6f2a5d" FOREIGN KEY ("productId") REFERENCES "public"."pizza"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
exports.remakeOrdersProductEntity1598637268429 = remakeOrdersProductEntity1598637268429;
//# sourceMappingURL=1598637268429-remakeOrdersProductEntity.js.map