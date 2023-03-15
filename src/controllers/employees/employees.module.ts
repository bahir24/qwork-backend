import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Employee, EmployeeSchema } from "../../schemas/employee.schema";
import { EmployeesController } from "./employees/employees.controller";
import { EmployeesService } from "../../services/employees/employees.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Employee.name, schema: EmployeeSchema }]),
  ],
  controllers: [EmployeesController],
  providers: [EmployeesService],
})
export class EmployeesModule {}
