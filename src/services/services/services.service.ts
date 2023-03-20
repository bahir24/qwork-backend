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

  async getServicesWithCategories(): Promise<Service[]> {
    return this.serviceModel.find().populate('category');
  }
  
  async sendServices(services): Promise<InsertManyResult<Service>> {
    return await this.serviceModel.collection.insertMany(services);
  }

  async getRelatedServices(): Promise<Service[]> {
    return this.serviceModel.aggregate([{'$sample': {'size': 3 }}]);
  }

  async getServiceById(serviceId): Promise<Service> {
    return this.serviceModel.findById(serviceId).exec();
  }

  async getServiceWithCategoryById(serviceId): Promise<Service> {
    return this.serviceModel.findById(serviceId).populate('category');
  }
  
  async deleteAllServices() {
    return this.serviceModel.deleteMany();
  }

  async attachCategoryToServices(category){
    this.serviceModel.updateMany(
      {_id: {$in: category.services}}, 
      { $set: {category: category._id}},
      {multi: true}, (err, res) => console.log(res) 
    );
  }


  
}
// return await this.serviceModel.insertMany(services);
// await session.commitTransaction();
// return serv;
// this.serviceModel.createCollection();
// const session = await this.serviceModel.startSession();
// await session.startTransaction();
