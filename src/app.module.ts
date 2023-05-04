import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersMiddleware } from './users/users.middleware';
import { DatabaseModule } from './database/database.module';
import { usersProviders } from './users/users.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [AppService,...usersProviders],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(UsersMiddleware)
      .forRoutes('');
  }
}
