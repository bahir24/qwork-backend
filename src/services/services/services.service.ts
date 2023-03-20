import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Service, ServiceDocument } from "../../schemas/service.schema";
import { Model } from "mongoose";
import { InsertManyResult } from "mongodb";

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
  
  async sendServices(services): Promise<InsertManyResult<Service>> {
    return await this.serviceModel.collection.insertMany(services);
  }

  async getRelatedServices(): Promise<Service[]> {
    return this.serviceModel.aggregate([{'$sample': {'size': 3 }}]);
  }

  async getServiceById(serviceId): Promise<Service> {
    // this.serviceModel.findById(serviceId).exec();
    // console.log(this.serviceModel.findById(serviceId).exec());
    
    return this.serviceModel.findById(serviceId).exec();
  }


  
}
// return await this.serviceModel.insertMany(services);
// await session.commitTransaction();
// return serv;
// this.serviceModel.createCollection();
// const session = await this.serviceModel.startSession();
// await session.startTransaction();
