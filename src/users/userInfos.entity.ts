import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Users } from './users.entity';

@Table({
    tableName: 'user_infos',
    schema: 'public',
    freezeTableName: true,
    timestamps: true,
  })
export class UserInfos extends Model<UserInfos> {

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    userId: number;

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