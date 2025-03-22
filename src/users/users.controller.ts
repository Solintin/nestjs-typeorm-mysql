import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { userDto } from './user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  /*
        GET /users
        GET /users/:id
        POST /users
        PATCH /users/:id
        DELETE /users/:id
    */

  @Get()
  findAll(@Query('role') role?: 'ENGINEER' | 'ADMIN' | 'INTERN') {
    return this.userService.findAll(role);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Post()
  create(@Body() user: userDto) {
    return this.userService.create(user);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() userUpdate: Partial<userDto>) {
    return this.userService.update(+id, userUpdate);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
