import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Employee, EmployeeDocument } from "../../schemas/employee.schema";
import { Model } from "mongoose";

@Injectable()
export class EmployeesService {
  constructor(@InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>) {
  }
  async getAllEmployees(): Promise<Employee[]> {
    return this.employeeModel.find();
  }
  async sendEmployee(data): Promise<Employee> {
    const employeeData = new this.employeeModel(data);
    return employeeData.save();
  }

  async sendEmployees(data): Promise<Employee[]> {
    return this.employeeModel.insertMany(data);
  }
}
