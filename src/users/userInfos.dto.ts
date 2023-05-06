import {IsNotEmpty } from "class-validator";

export class UserInfosDto {
    @IsNotEmpty()
    readonly userId: number;

    @IsNotEmpty()
    readonly age: number;

    @IsNotEmpty()
    readonly gender: string;

    @IsNotEmpty()
    readonly mobile: string;

    @IsNotEmpty()
    readonly address: string;
}