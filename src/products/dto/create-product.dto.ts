import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, MinLength } from 'class-validator';
export class CreateProductDto {
  @ApiProperty({
    description:"Name should be longer than 3 characters",
    example:"Oby hlibi"
  })
  @MinLength(3)
  name: string;
  @ApiProperty({
    description:"Price should be a number",
    example: 20
  })
  price: number;
  @ApiProperty({
    description:"Description should be longer than 5 characters",
    example:"Oby hlibi is good"
  })
  @MinLength(5)
  description: string;
  @ApiProperty({
    description:"Image should be a string",
    example:"image.jpg"
  })
  image: string;
  @ApiProperty({
    description:"Owner should be a string",
    example:"Oby"
  })
  owner: string;
  @ApiProperty({
    description:"Category should be either sport, games or cloths",
    example:"sport"
  })
  @ApiProperty({
    description:"Category should be longer than 3 characters",
    example:"cloths"
  })
  @IsEnum(["sport","games","cloths"],{message:"Category not allowed"})
  category: string;
  createdAt: Date;
  updatedAt: Date;
}
