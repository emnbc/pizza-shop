"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPizzaEntity1598195970642 = void 0;
class addPizzaEntity1598195970642 {
    constructor() {
        this.name = 'addPizzaEntity1598195970642';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "public"."pizza" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "img" character varying NOT NULL, "count" integer NOT NULL, "price" integer NOT NULL, CONSTRAINT "PK_5cb86762c7a7328d4d5287254e6" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "public"."pizza"`);
    }
}
exports.addPizzaEntity1598195970642 = addPizzaEntity1598195970642;
//# sourceMappingURL=1598195970642-addPizzaEntity.js.map