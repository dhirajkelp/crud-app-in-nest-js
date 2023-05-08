import { Inject, Injectable } from '@nestjs/common';
import { Users } from './users/users.entity';
import { UsersDto } from './users/users.dto';
import { UserInfosDto } from './users/userInfos.dto';
import { UserInfos } from './users/userInfos.entity';


@Injectable()
export class AppService {
  constructor(
    @Inject('USER_REPOSITORY') private readonly userRepository: typeof Users,
    @Inject('USERINFO_REPOSITORY') private readonly userInfoRepository: typeof UserInfos,
  ) {

  }

  async create(user: UsersDto): Promise<Users> {
    return await this.userRepository.create<Users>(user);
  }
  async findAll(): Promise<UsersDto[]> {
    let data = await this.userRepository.findAll<any>();
    return data;
  }
  async findoneuser(id: string): Promise<any[]> {
    let data = await this.userRepository.findOne<any>({
      where: {
        userId: id
      }
    });
    return data;
  }

  async updateuser(body: any, id: string): Promise<any[]> {
    let data = await this.userRepository.update({ ...body }, { where: { userId: id }, returning: true });
    return data;
  }

  async deleteUser(id: string): Promise<any> {
    let data = await this.userRepository.destroy<any>({
      where: {
        userId: id
      }
    });
    return data;
  }

  async createUserInfo(userinfo: UserInfosDto): Promise<UserInfos> {
    return await this.userInfoRepository.create<UserInfos>(userinfo);
  }

  async finduserinfo(id: string): Promise<any> {

    let data = await this.userInfoRepository.findAll({
      include:[{
        model:Users,
        attributes:['name'],
        where:{
          userId:id
        }
      }]
    })
    return data;

  }



}
