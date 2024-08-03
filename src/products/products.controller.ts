import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';
import { BeltGuard } from 'src/belt/belt.guard';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { Product } from './entities/product.entity';

@Controller('products')
@ApiTags("Products")

export class ProductsController {
  constructor(private readonly prductService: ProductsService) {}

  @Post()
  @ApiCreatedResponse({
    description : 'Create a new product as response',
    type: Product
  })
  @ApiBadRequestResponse({
    description : 'Bad Request',
  })
  @UseGuards(BeltGuard)
  createProduct(@Body(new ValidationPipe()) createProductDto: CreateProductDto) {
    return this.prductService.createProduct(createProductDto);
  }

  @Get()
  getProductsWithPrice(@Query('price') price: number) {
    return this.prductService.getProducts(price);
  }

  @Get(':id')
  getOneProduct(@Param('id',ParseIntPipe) id: number) {
    try {
      return this.prductService.getProductWithId(id);
    } catch (error) {
      return new NotFoundException();
    }
  }

  @Put(':id')
  updateProduct(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.prductService.updateProduct(+id, updateProductDto);
  }
  @Delete(':id')
  deleteProduct(@Param('id') id: string) {
    return this.prductService.deleteProductWithId(+id);
  }
}
