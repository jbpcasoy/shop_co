import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({ example: 'Electronics' })
  @IsString()
  name: string;

  @ApiProperty({
    example:
      'Devices and gadgets including smartphones, laptops, TVs, audio equipment, and more.',
  })
  @IsString()
  description: string;

  @ApiProperty({ example: 'electronics' })
  @IsString()
  slug: string;
}
