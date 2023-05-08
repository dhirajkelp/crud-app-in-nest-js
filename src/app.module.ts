import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersMiddleware } from './users/users.middleware';
import { DatabaseModule } from './database/database.module';
import { usersProviders } from './users/users.providers';
import { usersInfoProviders } from './users/userInfos.providers';

import { DatabaseUserInfoModule } from './database/databaseUserinfo.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRoot({
      username: 'postgres',
      password: 'root',
      database: 'demotable',
      host: 'localhost',
      port: 5432,
      dialect: 'postgres',
      autoLoadModels: true,
      synchronize: true
    }),
    DatabaseModule, DatabaseUserInfoModule],
  controllers: [AppController],
  providers: [AppService, ...usersProviders, ...usersInfoProviders],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(UsersMiddleware)
      .forRoutes('');
  }
}
