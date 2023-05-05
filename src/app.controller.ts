import { Controller, Get, Res, Req, Post, Put, Delete, Body, UseGuards, Param } from '@nestjs/common';
import { Request, response } from 'express';
import { AppService } from './app.service';
import { UserDto } from './users/user.dto';
import { UsersGuard } from './users/users.guard';
import { Users } from './users/users.interface'

@Controller()
@UseGuards(UsersGuard)
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post('create')
  async createuser(@Body() user: UserDto) {
    return await this.appService.create(user);
}


  @Get('fetchusers')
  async fetchUsers(@Req() request: Request, @Res() response: any): Promise<any> {
    let data = await this.appService.findAll();
    return response.status(200).json(data);
  }

  @Get('userdetails/:id')
  async userDetails(@Param('id') id :string, @Res() response): Promise<any> {
    return response.status(200).send(await this.appService.findoneuser(id));
  }


  @Put('update/:id')
  async pdateUser(@Body() body: UserDto,@Param('id') id :string, @Res() response): Promise<any> {
    return response.status(201).send(await this.appService.updateuser(body, id));
  }


  @Delete('deleteuser/:id')
  async deleteUser(@Param('id') id :string, @Res() response): Promise<any> {
    let deletrecord = await this.appService.deleteUser(id);
    if(deletrecord){
      return response.status(201).json("record deleted successfully");
    }else{
      return response.status(201).json("error occur while delete record");
    }
  }



}
