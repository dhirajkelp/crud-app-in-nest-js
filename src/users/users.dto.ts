import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class UsersDto {
  @ApiProperty({ description: 'Your name', example: 'Dhiraj' })
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({
    description: 'Correct Email id',
    example: 'example@gmail.com',
  })
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @ApiProperty({ description: 'Your Password', example: 'pass1234' })
  @IsNotEmpty()
  @MinLength(6)
  readonly password: string;
}
