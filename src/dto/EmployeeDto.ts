import { Employee } from "../schemas/employee.schema";

export class EmployeeDto implements Employee {
  title: string;
  subTitle: string;
  desc: string[];
  img: string;
}
