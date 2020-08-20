import {MigrationInterface, QueryRunner} from "typeorm";

export class RemoveUsername1597926839873 implements MigrationInterface {
    name = 'RemoveUsername1597926839873'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."user" DROP CONSTRAINT "UQ_b67337b7f8aa8406e936c2ff754"`);
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "username"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "username" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD CONSTRAINT "UQ_b67337b7f8aa8406e936c2ff754" UNIQUE ("username")`);
    }

}
