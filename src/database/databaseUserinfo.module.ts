import { Module } from '@nestjs/common';
import { databaseUserinfo } from './databaseUserinfo.providers';


@Module({
    providers: [...databaseUserinfo],
    exports: [...databaseUserinfo],
})
export class DatabaseUserInfoModule {}
