import { Sequelize } from 'sequelize-typescript';
import { UserInfos} from '../users/userInfos.entity';
import { Config } from './config.providers';


export const databaseUserinfo = [ {
    provide: 'SEQUELIZE',
    useFactory: async () => {
        let config:any = Config
        const sequelize = new Sequelize(config);
        sequelize.addModels([UserInfos]);
        await sequelize.sync();
        return sequelize;
    },
  },];