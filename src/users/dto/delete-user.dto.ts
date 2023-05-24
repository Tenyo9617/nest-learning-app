import { IsNotEmpty, MaxLength } from 'class-validator';

export class DeleteUserDto {
  @IsNotEmpty()
  id: number;
}
