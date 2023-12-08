import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Users } from './users.entity';

@Table({
  tableName: 'user_infos',
  freezeTableName: true,
  timestamps: true,
})
export class UserInfos extends Model<UserInfos> {
  @Column({
    field: 'user_infos_id',
    allowNull: false,
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  userInfosId: number;

  @ForeignKey(() => Users)
  @Column({
    field: 'user_id',
    type: DataType.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'user_id',
    },
  })
  userId: number;

  @BelongsTo(() => Users, { as: 'users' })
  users: Users;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  age: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  gender: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  mobile: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  address: string;
}
