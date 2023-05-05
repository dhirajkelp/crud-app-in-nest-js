import { Inject, Injectable } from '@nestjs/common';
import { User } from './users/user.entity';
import { UserDto } from './users/user.dto';


@Injectable()
export class AppService {
  constructor(@Inject('USER_REPOSITORY') private readonly userRepository: typeof User) {

  }

  async create(user: UserDto): Promise<User> {
    return await this.userRepository.create<User>(user);
  }
  async findAll(): Promise<any[]> {
    let data = await this.userRepository.findAll<any>();
    return data;
  }
  async findoneuser(id: string): Promise<any[]> {
    let data = await this.userRepository.findOne<any>({
      where: {
        id: id
      }
    });
    return data;
  }

  async updateuser(body: any, id: string): Promise<any[]> {
    let data = await this.userRepository.update({ ...body }, { where: { id: id }, returning: true });
    return data;
  }

  async deleteUser(id: string): Promise<any> {
    let data = await this.userRepository.destroy<any>({
      where: {
        id: id
      }
    });
    return data;
  }



}
