import { Injectable } from '@nestjs/common';
import { CreateTodoListDto } from './dto/create-todo-list.dto';
import { UpdateTodoListDto } from './dto/update-todo-list.dto';
import { InjectModel } from '@nestjs/sequelize';
import { TodoListItem } from './todo-list.model';
import { Op } from 'sequelize';

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

  findAll({
    status,
    limit,
    search,
  }: {
    status?: string;
    limit?: number;
    search?: string;
  }): Promise<TodoListItem[]> {
    const s = { done: true, undone: false };
    console.log('search', search);
    return this.todolistItem.findAll({
      order: ['description'],
      where: {
        ...(status ? { status: s[status] } : {}),
        ...(search
          ? {
              description: {
                [Op.like]: `%${search}%`,
              },
            }
          : {}),
      },
      limit,
    });
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
    return this.todolistItem.destroy({
      where: { id },
    });
  }

  removeAll() {
    return this.todolistItem.destroy({
      truncate: true,
    });
  }
}
