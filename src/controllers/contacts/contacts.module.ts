import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Contact, ContactSchema } from "../../schemas/contact.schema";
import { ContactsController } from "./contacts/contacts.controller";
import { ContactsService } from "../../services/contacts/contacts.service";
import { City, CitySchema } from "../../schemas/city.schema";
import { CitiesService } from "../../services/cities/cities.service";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Contact.name, schema: ContactSchema },
      { name: City.name, schema: CitySchema }
    ]),
  ],
  controllers: [ContactsController],
  providers: [ContactsService, CitiesService],
})
export class ContactsModule {}
