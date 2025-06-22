import { PartialType } from '@nestjs/mapped-types';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { CreateCategoryDto } from './create-category.dto';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
  @ApiPropertyOptional({ example: 'Electronics' })
  name?: string;

  @ApiPropertyOptional({
    example:
      'Devices and gadgets including smartphones, laptops, TVs, audio equipment, and more.',
  })
  description?: string;

  @ApiPropertyOptional({ example: 'electronics' })
  slug?: string;
}
