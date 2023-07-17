import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsNumber()
    number: number;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    address: string;

    @IsNotEmpty()
    @IsString()
    city: string;

    @IsNotEmpty()
    @IsString()
    state: string;

    @IsNotEmpty()
    @IsString()
    pcontact: string;

    @IsNotEmpty()
    @IsNumber()
    pcontactnum: number;

    @IsNotEmpty()
    @IsString()
    prelationship: string;

    @IsNotEmpty()
    @IsString()
    scontact: string;

    @IsNotEmpty()
    @IsNumber()
    scontactnum: number;

    @IsNotEmpty()
    @IsString()
    srelationship: string;
}

export class UpdateDto {
    @IsString()
    name: string;

    @IsString()
    title: string;

    @IsNumber()
    number: number;

    @IsEmail()
    email: string;

    @IsString()
    address: string;

    @IsString()
    city: string;

    @IsString()
    state: string;

    @IsString()
    pcontact: string;

    @IsNumber()
    pcontactnum: number;

    @IsString()
    prelationship: string;

    @IsString()
    scontact: string;

    @IsNumber()
    scontactnum: number;

    @IsString()
    srelationship: string;
}