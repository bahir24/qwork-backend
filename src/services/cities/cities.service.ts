import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { City, CityDocument } from "../../schemas/city.schema";
import { Contact } from "../../schemas/contact.schema";

@Injectable()
export class CitiesService {
  constructor(@InjectModel(City.name) private cityModel: Model<CityDocument>) 
  {}
  async getAllCities(): Promise<City[]> {
    return this.cityModel.find();
  }
  async getCityByCityId(city_id): Promise<City> {
    return this.cityModel.findOne({ "city.id": city_id });
  }
  async getContactByCityId(cityId): Promise<Contact> {
    return this.cityModel.findOne({ "city.id": cityId }).populate("contact");
  }
  async sendCity(city: City): Promise<City> {
    return await this.cityModel.findOne(city).exec() ?? await this.cityModel.create(city).then(city => city);
  }
  async sendCities(data): Promise<City[]> {
    return this.cityModel.insertMany(data);
  }
  async deleteAllCities() {
    return this.cityModel.deleteMany();
  }
}
