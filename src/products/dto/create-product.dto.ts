import { IsEnum, MinLength } from 'class-validator';
export class CreateProductDto {
  @MinLength(3)
  name: string;
  price: number;
  @MinLength(5)
  description: string;
  image: string;
  owner: string;
  @IsEnum(["sport","games","cloths"],{message:"Category not allowed"})
  category: string;
  createdAt: Date;
  updatedAt: Date;
}
