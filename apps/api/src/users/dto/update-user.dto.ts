import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({ example: 'John Doe' })
  name?: string;

  @ApiProperty({ example: '1990-01-01' })
  birthday?: string;
}
