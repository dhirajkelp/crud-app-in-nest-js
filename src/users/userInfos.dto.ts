import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UserInfosDto {
  @ApiProperty({ description: 'User id', example: 1 })
  @IsNotEmpty()
  readonly userId: number;

  @ApiProperty({ description: 'Age', example: 25 })
  @IsNotEmpty()
  readonly age: number;

  @ApiProperty({ description: 'Gender', example: 'male' })
  @IsNotEmpty()
  readonly gender: string;

  @ApiProperty({ description: 'Mobile', example: '9999999999' })
  @IsNotEmpty()
  readonly mobile: string;

  @ApiProperty({ description: 'address', example: 'mumbai' })
  @IsNotEmpty()
  readonly address: string;
}
