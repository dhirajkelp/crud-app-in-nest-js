import { Table, Column, Model, DataType, HasOne } from 'sequelize-typescript';
import { UserInfos } from './userInfos.entity';

@Table({
    tableName: 'users',
    freezeTableName: true,
    timestamps: true,
  })
export class Users extends Model<Users> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password: string;

}