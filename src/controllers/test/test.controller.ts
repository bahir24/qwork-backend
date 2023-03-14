import { Body, Controller, Get, Post } from '@nestjs/common';
import { TestService } from '../../services/test/test.service';
import { Test } from '../../schemas/test.schema';
import { TestDto } from '../../dto/TestDto';

@Controller('test')
export class TestController {
  constructor(private testService: TestService) {}

  @Get()
  getAllTests(): Promise<Test[]> {
    return this.testService.getAllTests();
  }

  @Post()
  sendUser(@Body() data: TestDto): Promise<Test> {
    return this.testService.sendTest(data);
  }
}

// return this.userService.checkRegUser(data.login).then((queryRes) => {
//   console.log(data);
// if (queryRes.length === 0) {

// } else {
//   console.log('err - user is exists');
//   return Promise.reject();
// }
// });
