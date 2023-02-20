import { MigrationInterface, QueryRunner } from "typeorm";

export class postTable1676889126779 implements MigrationInterface {
    name = 'postTable1676889126779'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`post\` (\`id\` varchar(36) NOT NULL, \`title\` varchar(60) NOT NULL, \`body\` varchar(500) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`post\``);
    }

}
