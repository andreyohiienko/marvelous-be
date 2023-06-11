import { Module } from '@nestjs/common';
import { TodoListService } from './todo-list.service';
import { TodoListController } from './todo-list.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { TodoListItem } from './todo-list.model';

@Module({
  imports: [SequelizeModule.forFeature([TodoListItem])],
  controllers: [TodoListController],
  providers: [TodoListService],
})
export class TodoListModule {}
