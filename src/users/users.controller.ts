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

@Controller('users')
export class UsersController {
  /*
        GET /users
        GET /users/:id
        POST /users
        PATCH /users/:id
        DELETE /users/:id
    */

  @Get()
  findAll(@Query('role') role?: 'USER' | 'ADMIN') {
    return [
      {
        name: 'Soliu Alley',
        gender: 'MALE',
        job: 'Software Engineer',
        role,
      },
      {
        name: 'Tunde Alleyah',
        gender: 'FEMALE',
        job: 'Software Engineer',
        role,
      },
    ];
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return {
      id,
    };
  }

  @Post()
  create(@Body() user: {}) {
    return {
      ...user,
    };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate };
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return { id };
  }
}
