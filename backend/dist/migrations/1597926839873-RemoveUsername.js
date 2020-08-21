"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveUsername1597926839873 = void 0;
class RemoveUsername1597926839873 {
    constructor() {
        this.name = 'RemoveUsername1597926839873';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "public"."user" DROP CONSTRAINT "UQ_b67337b7f8aa8406e936c2ff754"`);
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "username"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "username" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD CONSTRAINT "UQ_b67337b7f8aa8406e936c2ff754" UNIQUE ("username")`);
    }
}
exports.RemoveUsername1597926839873 = RemoveUsername1597926839873;
//# sourceMappingURL=1597926839873-RemoveUsername.js.map