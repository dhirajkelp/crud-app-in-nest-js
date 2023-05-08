import { Table, Column, Model, DataType, HasOne } from 'sequelize-typescript';
import { UserInfos } from './userInfos.entity';

@Table({
    tableName: 'users',
    freezeTableName: true,
    timestamps: true,
  })
export class Users extends Model<Users> {

    @Column({
        field: 'user_id',
        allowNull: false,
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      })
      userId: number;

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


    @HasOne(()=> UserInfos, {as:'user_infos'})
    users:UserInfos
   


}