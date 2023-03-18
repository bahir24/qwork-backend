import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Service, ServiceDocument } from "../../schemas/service.schema";

@Injectable()
export class ServicesService {
  constructor(
    @InjectModel(Service.name) private serviceModel: Model<ServiceDocument>
  ) {
  }
  async getAllServices(): Promise<Service[]> {
    return this.serviceModel.find();
  }

  async getGroupedServices(): Promise<Service[]> {
    return this.serviceModel.find().populate('category');
  }
  async sendService(data): Promise<Service[]> {
    return this.serviceModel.insertMany(data);
  }

  async getRelatedServices(): Promise<Service[]> {
    return this.serviceModel.aggregate([{'$sample': {'size': 3 }}]);
  }

  async getServiceById(serviceId: string): Promise<Service> {
    return this.serviceModel.findById(serviceId);
  }


  
}
