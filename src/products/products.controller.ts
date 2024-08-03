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

@Controller('products')
export class ProductsController {
  constructor(private readonly prductService: ProductsService) {}

  @Post()
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
