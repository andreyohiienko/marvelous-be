import { Test, TestingModule } from '@nestjs/testing';
import { TodoListService } from './todo-list.service';
import { TodoListItem } from './todo-list.model';
import { getModelToken } from '@nestjs/sequelize';

describe('TodoListService', () => {
  let service: TodoListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TodoListService,
        { provide: getModelToken(TodoListItem), useValue: jest.fn() },
      ],
    }).compile();

    service = module.get<TodoListService>(TodoListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
