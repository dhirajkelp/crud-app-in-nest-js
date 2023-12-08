import {
  Controller,
  Get,
  Res,
  Req,
  Post,
  Put,
  Delete,
  Body,
  UseGuards,
  Param,
} from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';
import { UsersDto } from './users/users.dto';
import { UserInfosDto } from './users/userInfos.dto';
import { UsersGuard } from './users/users.guard';
import { ApiResponse } from '@nestjs/swagger';

@Controller()
@UseGuards(UsersGuard)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('create')
  @ApiResponse({ type: UsersDto })
  async createUser(@Body() user: UsersDto) {
    return await this.appService.create(user);
  }

  @Get('fetch-users')
  @ApiResponse({ type: UsersDto })
  async fetchUsers(
    @Req() request: Request,
    @Res() response: any,
  ): Promise<UsersDto> {
    const data = await this.appService.findAll();
    return response.status(200).json(data);
  }

  @Get('user-details/:id')
  @ApiResponse({ type: UsersDto })
  async userDetails(@Param('id') id: string, @Res() response): Promise<any> {
    return response.status(200).send(await this.appService.findOneUser(id));
  }

  @Put('update/:id')
  async updateUser(
    @Body() body: UsersDto,
    @Param('id') id: string,
    @Res() response,
  ): Promise<any> {
    return response
      .status(201)
      .send(await this.appService.updateUser(body, id));
  }

  @Delete('delete-user/:id')
  async deleteUser(@Param('id') id: string, @Res() response): Promise<any> {
    const deleteRecord = await this.appService.deleteUser(id);
    if (deleteRecord) {
      return response.status(201).json('record deleted successfully');
    } else {
      return response.status(201).json('error occur while delete record');
    }
  }

  @Post('create-userinfo')
  @ApiResponse({ type: UserInfosDto })
  async creteUserInfo(@Body() user: UserInfosDto) {
    return await this.appService.createUserInfo(user);
  }

  @Get('fetch-userinfo/:id')
  async findUserinfo(@Param('id') id: string, @Res() response): Promise<any> {
    return response.status(200).send(await this.appService.findUserinfo(id));
  }
}
