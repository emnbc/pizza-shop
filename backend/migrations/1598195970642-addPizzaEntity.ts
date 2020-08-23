import {MigrationInterface, QueryRunner} from "typeorm";

export class addPizzaEntity1598195970642 implements MigrationInterface {
    name = 'addPizzaEntity1598195970642'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "public"."pizza" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "img" character varying NOT NULL, "count" integer NOT NULL, "price" integer NOT NULL, CONSTRAINT "PK_5cb86762c7a7328d4d5287254e6" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "public"."pizza"`);
    }

}
