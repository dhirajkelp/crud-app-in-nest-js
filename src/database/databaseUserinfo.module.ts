import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserInfos } from 'src/users/userInfos.entity';

@Module({
    imports:[SequelizeModule.forFeature([UserInfos])],
    providers: [],
    exports: [],
})
export class DatabaseUserInfoModule {}