import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Contact, ContactDocument } from "../../schemas/contact.schema";
import { Model } from "mongoose";

@Injectable()
export class ContactsService {
  constructor(@InjectModel(Contact.name) private contactModel: Model<ContactDocument>) {
  }
  async getAllContacts(): Promise<Contact[]> {
    return this.contactModel.find();
  }
  async getContactByCityId(city_id): Promise<Contact> {
    return this.contactModel.findOne({'city.id': city_id});
  }
  async sendContacts(data): Promise<Contact[]> {
    return this.contactModel.insertMany(data);
  }
}
