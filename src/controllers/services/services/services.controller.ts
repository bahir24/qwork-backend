import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ServicesService } from "../../../services/services/services.service";
import { Service } from "../../../schemas/service.schema";
import { ServiceDto } from "../../../dto/ServiceDto";
import { Contact } from "../../../schemas/contact.schema";
import { InsertManyResult } from "mongodb";

@Controller('services')
export class ServicesController {
  constructor(private servicesService: ServicesService) {}

  @Get()
  getAllServices(): Promise<Service[]> {
    return this.servicesService.getAllServices();
  }


  @Get("service/:service_id")
  getContactByCityId(@Param("service_id") serviceId): Promise<Service> {
    // console.log('get service');
    return this.servicesService.getServiceById(serviceId);
  }

  @Get('grouped')
  getGroupedServices(): Promise<Service[]> {
    return this.servicesService.getGroupedServices();
  }

  @Get('related')
  getRelatedServices(): Promise<Service[]> {
    return this.servicesService.getRelatedServices();
  }
  
  @Post()
  sendServices(@Body() data: ServiceDto[]): Promise<InsertManyResult<Service>> {
    return this.servicesService.sendServices(data);
  }

  @Delete()
  deleteAllServices(): void {
    this.servicesService.deleteAllServices();
  }
}
