import { Delete, Injectable } from '@nestjs/common';
import { CreateTodoListDto } from './dto/create-todo-list.dto';
import { UpdateTodoListDto } from './dto/update-todo-list.dto';
import { InjectModel } from '@nestjs/sequelize';
import { TodoListItem } from './todo-list.model';

@Injectable()
export class TodoListService {
  constructor(
    @InjectModel(TodoListItem)
    private todolistItem: typeof TodoListItem,
  ) {}

  create(createTodoListDto: CreateTodoListDto) {
    return this.todolistItem.create({
      description: createTodoListDto.description,
    });
  }

  findAll(): Promise<TodoListItem[]> {
    return this.todolistItem.findAll({ order: ['description'] });
  }

  findOne(id: number) {
    return `This action returns a #${id} todoList`;
  }

  update(id: number, updateTodoListDto: UpdateTodoListDto) {
    return this.todolistItem.update(
      { status: updateTodoListDto.status },
      { where: { id } },
    );
  }

  remove(id: number) {
    console.log(id);
    return this.todolistItem.destroy({
      where: { id },
    });
  }

  @Delete('all')
  removeAll() {
    return this.todolistItem.destroy({
      truncate: true,
    });
  }
}
