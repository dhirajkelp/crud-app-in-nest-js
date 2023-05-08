import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from 'src/users/users.entity';


@Module({
    imports:[SequelizeModule.forFeature([Users])],
    providers: [],
    exports: [],
})
export class DatabaseModule {}
