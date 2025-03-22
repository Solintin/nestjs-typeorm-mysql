import { Injectable } from '@nestjs/common';
import { userDto } from './user.dto';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Soliu Alley',
      gender: 'MALE',
      job: 'Software Engineer',
      role: 'INTERN',
    },
    {
      id: 2,
      name: 'Tunde Alleyah',
      gender: 'FEMALE',
      job: 'Officer',
      role: 'ADMIN',
    },
    {
      id: 3,
      name: 'Jane Doe',
      gender: 'FEMALE',
      job: 'Mechanics',
      role: 'ENGINEER',
    },
    {
      id: 4,
      name: 'John Doe',
      gender: 'FEMALE',
      job: 'Carpenter',
      role: 'INTERN',
    },
    {
      id: 5,
      name: 'Lorem Ipsum',
      gender: 'FEMALE',
      job: 'Teacher',
      role: 'ADMIN',
    },
  ];

  findAll(role?: 'ADMIN' | 'ENGINEER' | 'INTERN') {
    if (role) {
      return this.users.filter((v) => v.role === role);
    }
    return this.users;
  }
  findOne(id: number) {
    return this.users.find((v) => v.id === id);
  }
  create(user: userDto) {
    const getHighestId = this.users.sort((a, b) => b.id - a.id);
    // console.log(getHighestId);
    const newUserId = getHighestId[0].id + 1;
    const newUser = { ...user, id: newUserId };
    this.users.push(newUser);
    return newUser;
  }
  update(id: number, user: Partial<userDto>) {
    let getUser = this.users.find((v) => v.id === id);
    if (getUser) {
      getUser = { ...getUser, ...user };
    }
    this.users.filter((v) => v.id !== id);
    this.users.push(getUser as userDto);
    return getUser;
  }

  remove(id: number) {
    const removedUser = this.findOne(id);
    this.users.filter((v) => v.id !== id);
    return removedUser;
  }
}
