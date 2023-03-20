import { Body, Controller, Delete, Get, Post } from "@nestjs/common";
import { StrengthsService } from "../../../services/strengths/strengths.service";
import { Strength } from "../../../schemas/strength.schema";
import { StrengthDto } from "../../../dto/StrengthDto";

@Controller('strengths')
export class StrengthsController {
  constructor(private strengthsService: StrengthsService) {}

  @Get()
  getAllStrengths(): Promise<Strength[]> {
    // let strrr = 
    // console.log('get Strengths', strrr.then(res => console.log(res)));
    return this.strengthsService.getAllStrengths();
  }

  @Post()
  sendStrengths(@Body() data: StrengthDto[]): Promise<Strength[]> {
    return this.strengthsService.sendStrength(data);
  }

  @Delete()
  deleteAllStrengths(): void {
    this.strengthsService.deleteAllStrengths();
  }
  
}
