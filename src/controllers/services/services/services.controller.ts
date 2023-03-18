import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ServicesService } from "../../../services/services/services.service";
import { Service } from "../../../schemas/service.schema";
import { ServiceDto } from "../../../dto/ServiceDto";

@Controller('services')
export class ServicesController {
  constructor(private servicesService: ServicesService) {}

  @Get()
  getAllServices(): Promise<Service[]> {
    return this.servicesService.getAllServices();
  }

  @Get("service/:service_id")
  getServiceById(@Param("service_id") serviceId): Promise<Service> {
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
  sendServices(@Body() data: ServiceDto[]): Promise<Service[]> {
    return this.servicesService.sendService(data);
  }
}
