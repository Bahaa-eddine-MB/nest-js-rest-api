import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  private products = [
    {
      id: 0,
      name: 'Product 3',
      price: 30,
      description: 'This is product 3',
      image: 'product3.jpg',
      owner: 'Mark Johnson',
      category: 'Category 3',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 1,
      name: 'Product 4',
      price: 40,
      description: 'This is product 4',
      image: 'product4.jpg',
      owner: 'Emily Brown',
      category: 'Category 4',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      name: 'Product 5',
      price: 50,
      description: 'This is product 5',
      image: 'product5.jpg',
      owner: 'Michael Wilson',
      category: 'Category 5',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      name: 'Product 6',
      price: 60,
      description: 'This is product 6',
      image: 'product6.jpg',
      owner: 'Sophia Davis',
      category: 'Category 6',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 4,
      name: 'Product 7',
      price: 70,
      description: 'This is product 7',
      image: 'product7.jpg',
      owner: 'William Martinez',
      category: 'Category 7',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 5,
      name: 'Product 8',
      price: 80,
      description: 'This is product 8',
      image: 'product8.jpg',
      owner: 'Olivia Anderson',
      category: 'Category 8',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 6,
      name: 'Product 9',
      price: 90,
      description: 'This is product 9',
      image: 'product9.jpg',
      owner: 'James Taylor',
      category: 'Category 9',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 7,
      name: 'Product 10',
      price: 100,
      description: 'This is product 10',
      image: 'product10.jpg',
      owner: 'Ava Thomas',
      category: 'Category 10',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  getProducts(price?: number) {    
    if (price) {
      return this.products.filter((product) => product.price == price);
    }
    return this.products;
  }

  getProductWithId(id?: number) {    
    const product = this.products.find((product) => product.id == id);
    if (!product) {      
      throw new Error('Product not found');
    } else {
      return product;
    }
  }

  createProduct(createProductDto: CreateProductDto) {
    const product = {
      ...createProductDto,
      id: Date.now(),
    };
    this.products.push(product);
    return product;
  }

  updateProduct(id: number, updateProductDto: UpdateProductDto) {
    this.products = this.products.map((product) => {
      if (product.id == id) {
        return { ...product, ...updateProductDto };
      }
      return product;
    });
    return this.getProductWithId(id);
  }

  deleteProductWithId(id?: number) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) {
      throw new Error('Product not found');
    } else {
      const deletedProduct = this.products.splice(index, 1);
      return deletedProduct[0];
    }
  }
}
