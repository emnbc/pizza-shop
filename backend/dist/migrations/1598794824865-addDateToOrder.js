"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDateToOrder1598794824865 = void 0;
class addDateToOrder1598794824865 {
    constructor() {
        this.name = 'addDateToOrder1598794824865';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "public"."order" ADD "date" TIMESTAMP NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "public"."order" DROP COLUMN "date"`);
    }
}
exports.addDateToOrder1598794824865 = addDateToOrder1598794824865;
//# sourceMappingURL=1598794824865-addDateToOrder.js.map