import { User } from '../../users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 60,
  })
  title: string;

  @Column({
    length: 500,
  })
  body: string;

  @ManyToOne(() => User, (user) => user.posts)
  user: User;
}
