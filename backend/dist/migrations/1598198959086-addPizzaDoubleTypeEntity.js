"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPizzaDoubleTypeEntity1598198959086 = void 0;
class addPizzaDoubleTypeEntity1598198959086 {
    constructor() {
        this.name = 'addPizzaDoubleTypeEntity1598198959086';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "public"."pizza" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "public"."pizza" ADD "price" money NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "public"."pizza" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "public"."pizza" ADD "price" integer NOT NULL`);
    }
}
exports.addPizzaDoubleTypeEntity1598198959086 = addPizzaDoubleTypeEntity1598198959086;
//# sourceMappingURL=1598198959086-addPizzaDoubleTypeEntity.js.map