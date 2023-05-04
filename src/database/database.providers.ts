import { Sequelize } from 'sequelize-typescript';
import { User} from '../users/user.entity'


export const databaseProviders = [ {
    provide: 'SEQUELIZE',
    useFactory: async () => {
        let config:any = {
            username: 'postgres',
            password: 'root',
            database: 'demotable',
            host: 'localhost',
            port: '5432',
            dialect: 'postgres'
        }
        const sequelize = new Sequelize(config);
        sequelize.addModels([User]);
        await sequelize.sync();
        return sequelize;
    },
  },];