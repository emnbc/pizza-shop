import {MigrationInterface, QueryRunner} from "typeorm";

export class RemoveBirthDay1597927166480 implements MigrationInterface {
    name = 'RemoveBirthDay1597927166480'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "birthDate"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "birthDate" character varying NOT NULL`);
    }

}
