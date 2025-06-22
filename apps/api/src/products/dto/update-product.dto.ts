import { PartialType } from '@nestjs/mapped-types';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @ApiPropertyOptional({ example: 'Updated Macbook Pro' })
  name?: string;

  @ApiPropertyOptional({ example: 1799.99 })
  price?: number;

  @ApiPropertyOptional({ example: false })
  isActive?: boolean;
}
