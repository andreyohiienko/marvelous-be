import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoListModule } from './todo-list/todo-list.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { TodoListItem } from './todo-list/todo-list.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      storage: 'todoList.sqlite',
      models: [TodoListItem],
      autoLoadModels: true,
    }),
    TodoListModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
