import { Controller, Get, Res, Req, Post, Put, Delete, Body, UseGuards } from '@nestjs/common';
import { Request, response } from 'express';
import { AppService } from './app.service';
import { UsersGuard } from './users/users.guard';
import { Users } from './users/users.interface'

@Controller()
@UseGuards(UsersGuard)
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(@Req() request: Request, @Res() response): string {
    return response.status(200).send(this.appService.getHello());
  }

  @Post('create')
  async postUser(@Body() body: Users, @Res() response): Promise<any> {
    return response.status(201).send(await this.appService.create(body));
  }


  @Get('fetchusers')
  async fetchUsers(@Req() request: Request, @Res() response: any): Promise<any> {
    let data = await this.appService.findAll();
    return response.status(200).json(data);
  }

  @Get('userdetails/:id')
  async userDetails(@Req() request: Request, @Res() response): Promise<any> {
    return response.status(200).send(await this.appService.findoneuser(request.params.id));
  }


  @Put('update/:id')
  async pdateUser(@Req() request: Request, @Res() response): Promise<any> {
    return response.status(201).send(await this.appService.updateuser(request.body, request.params.id));
  }


  @Delete('deleteuser/:id')
  async deleteUser(@Req() request: Request, @Res() response): Promise<any> {
    let deletrecord = await this.appService.deleteUser(request.params.id);
    if(deletrecord){
      return response.status(201).json("record deleted successfully");
    }else{
      return response.status(201).json("error occur while delete record");
    }
  }



}
