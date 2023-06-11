import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class TodoListItem extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  description: string;

  @Column({ defaultValue: false })
  status: boolean;
}
