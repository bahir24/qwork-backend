import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ContactsService } from "../../../services/contacts/contacts.service";
import { Contact } from "../../../schemas/contact.schema";
import { ContactDto } from "../../../dto/ContactDto";

@Controller('contacts')
export class ContactsController {
  constructor(private contactsService: ContactsService) {}

  @Get()
  getAllContacts(): Promise<Contact[]> {
    return this.contactsService.getAllContacts();
  }

  @Get('city/:city_id')
  getContactByCityId(@Param('city_id') city_id): Promise<Contact> {
    return this.contactsService.getContactByCityId(city_id);
  }

  @Post()
  sendContacts(@Body() data: ContactDto[]): Promise<Contact[]> {
    return this.contactsService.sendContacts(data);
  }
}
