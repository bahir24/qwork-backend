import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Contact, ContactDocument } from "../../schemas/contact.schema";
import { Model } from "mongoose";
import { AddressDto } from "../../dto/AddressDto";

@Injectable()
export class ContactsService {
  constructor(@InjectModel(Contact.name) private contactModel: Model<ContactDocument>)
  {}
  async getAllContacts(): Promise<Contact[]> {
    return this.contactModel.find();
  }
  async getContactByCityId(city_id): Promise<Contact> {    
    return this.contactModel.findOne({'city': city_id}).populate('city');
  }
  async sendContacts(contacts: Promise<void>[]) {
    return this.contactModel.insertMany(contacts);
  }
  async sendContact(contact: AddressDto):Promise<Contact> {
    return this.contactModel.create(contact).then(contact => contact.populate('city'));
  }
}
