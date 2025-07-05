import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('date')
  birthday: string;

  //   TODO: Link a Credentials resource where the password and 
  //         username will be saved
}
