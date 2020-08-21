"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveBirthDay1597927166480 = void 0;
class RemoveBirthDay1597927166480 {
    constructor() {
        this.name = 'RemoveBirthDay1597927166480';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "birthDate"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "birthDate" character varying NOT NULL`);
    }
}
exports.RemoveBirthDay1597927166480 = RemoveBirthDay1597927166480;
//# sourceMappingURL=1597927166480-RemoveBirthDay.js.map