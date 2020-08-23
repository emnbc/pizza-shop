"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPizzaNumericTypeEntity1598204904192 = void 0;
class addPizzaNumericTypeEntity1598204904192 {
    constructor() {
        this.name = 'addPizzaNumericTypeEntity1598204904192';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "public"."pizza" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "public"."pizza" ADD "price" real NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "public"."pizza" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "public"."pizza" ADD "price" numeric(8,2) NOT NULL`);
    }
}
exports.addPizzaNumericTypeEntity1598204904192 = addPizzaNumericTypeEntity1598204904192;
//# sourceMappingURL=1598204904192-addPizzaNumericTypeEntity.js.map