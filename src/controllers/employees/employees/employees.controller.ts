import { Body, Controller, Delete, Get, Post } from "@nestjs/common";
import { EmployeesService } from "../../../services/employees/employees.service";
import { Employee } from "../../../schemas/employee.schema";
import { EmployeeDto } from "../../../dto/EmployeeDto";

@Controller('employees')
export class EmployeesController {
  constructor(private employeesService: EmployeesService) {}

  @Get()
  getAllEmployees(): Promise<Employee[]> {
    return this.employeesService.getAllEmployees();
  }
  
  @Post()
  sendContact(@Body() data: EmployeeDto[]): Promise<Employee[]> {
    return this.employeesService.sendEmployees(data);
  }
  @Delete()
  deleteAllEmployees(): void {
    this.employeesService.deleteAllEmployees();
  }
}
