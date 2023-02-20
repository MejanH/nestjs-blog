import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create({ username, password }: CreateUserDto) {
    if (username && password) {
      const hashedPassword = bcrypt.hashSync(password, 10);
      const user = this.usersRepository.create({
        username,
        password: hashedPassword,
      });
      return await this.usersRepository.save(user);
    } else {
      throw new HttpException(
        'username & password is required',
        HttpStatus.FORBIDDEN,
      );
    }
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: string) {
    return await this.usersRepository.delete({
      id,
    });
  }
}
