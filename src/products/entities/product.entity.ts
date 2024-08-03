import { ApiProperty } from '@nestjs/swagger';

export class Product {
  id: number;
  @ApiProperty({
    description: 'Name should be longer than 3 characters',
    example: 'Oby hlibi',
  })
  name: string;
  @ApiProperty({
    description: 'Price should be a number',
    example: 20,
  })
  price: number;
  @ApiProperty({
    description: 'Description should be longer than 5 characters',
    example: 'Oby hlibi is good',
  })
  description: string;
  @ApiProperty({
    description: 'Image should be a string',
    example: 'image.jpg',
  })
  image: string;
  @ApiProperty({
    description: 'Owner should be a string',
    example: 'Oby',
  })
  owner: string;
  @ApiProperty({
    description: 'Category should be either sport, games or cloths',
    example: 'sport',
  })
  category: string;
  createdAt: Date;
  updatedAt: Date;
}
