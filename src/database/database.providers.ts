import { Sequelize } from 'sequelize-typescript';
import { Users} from '../users/users.entity'
import { Config } from './config.providers';


export const databaseProviders = [ {
    provide: 'SEQUELIZE',
    useFactory: async () => {
        let config:any = Config
        const sequelize = new Sequelize(config);
        sequelize.addModels([Users]);
        await sequelize.sync();
        return sequelize;
    },
  },];