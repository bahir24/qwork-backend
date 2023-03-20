import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ServicesService } from "../../../services/services/services.service";
import { Service } from "../../../schemas/service.schema";
import { ServiceDto } from "../../../dto/ServiceDto";
import { Contact } from "../../../schemas/contact.schema";
import { InsertManyResult } from "mongodb";
import { FilterDto } from "../../../dto/FilterDto";

@Controller("services")
export class ServicesController {
  constructor(private servicesService: ServicesService) {
  }

  @Get()
  getAllServices(): Promise<Service[]> {
    return this.servicesService.getAllServices();
  }

  @Get("service/:service_id")
  getContactByCityId(@Param("service_id") serviceId): Promise<Service> {
    return this.servicesService.getServiceById(serviceId);
  }

  @Get("service/category/:service_id")
  getServiceWithCategoryById(@Param("service_id") serviceId): Promise<Service> {
    return this.servicesService.getServiceWithCategoryById(serviceId);
  }

  @Post("/filter")
  getServicesByFilterWithCategory(@Body() filter: FilterDto): Promise<Service[]> {
    return this.servicesService.getServicesByFilter(filter);
  }

  @Get("categories")
  getGroupedServices(): Promise<Service[]> {
    return this.servicesService.getServicesWithCategories();
  }

  @Get("related")
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
