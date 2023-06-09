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
    return this.contactModel.find().populate('city');
  }
  async getContactByCityId(cityId): Promise<Contact> {
    // const temp  = 
    // console.log('contact by city id', temp);
    return this.contactModel.findOne({'city': cityId}).populate('city');
  }
  async sendContacts(contacts: Promise<void>[]) {
    return this.contactModel.insertMany(contacts);
  }
  async sendContact(contact: AddressDto):Promise<Contact> {
    return this.contactModel.create(contact).then(contact => contact.populate('city'));
  }
  async deleteAllContacts() {
    return this.contactModel.deleteMany();
  }
}
