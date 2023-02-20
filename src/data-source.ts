import * as path from 'node:path';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'test',
  entities: [path.resolve('./src/**/entities/*.entity.ts')],
  migrations: [path.resolve('./src/migrations/*.ts')],
});
