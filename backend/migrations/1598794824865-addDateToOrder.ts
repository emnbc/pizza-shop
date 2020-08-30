import {MigrationInterface, QueryRunner} from "typeorm";

export class addDateToOrder1598794824865 implements MigrationInterface {
    name = 'addDateToOrder1598794824865'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."order" ADD "date" TIMESTAMP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."order" DROP COLUMN "date"`);
    }

}
