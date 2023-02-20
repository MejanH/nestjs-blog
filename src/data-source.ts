import { DataSource, DataSourceOptions } from 'typeorm';
import { Post } from './posts/entities/post.entity';
import * as path from 'node:path';

export const typeOrmDataSource: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'test',
  entities: [Post],
  migrations: [path.resolve('./src/migrations/*.ts')],
};

export const AppDataSource = new DataSource(typeOrmDataSource);
