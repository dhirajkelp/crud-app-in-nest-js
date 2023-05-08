// export const Config = {
//     username: 'postgres',
//     password: 'root',
//     database: 'demotable',
//     host: 'localhost',
//     port: '5432',
//     dialect: 'postgres'
// }

import { Logger } from '@nestjs/common';
import { SequelizeOptions } from 'sequelize-typescript';

const logger = new Logger('Sequelize SQL');
export const Config: SequelizeOptions = {
    username: 'postgres',
    password: 'root',
    database: 'demotable',
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
  logging: (msg) => {
    logger.debug(msg);
  },
  logQueryParameters: true,
};