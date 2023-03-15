import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Contact, ContactSchema } from "../../schemas/contact.schema";
import { ContactsController } from "./contacts/contacts.controller";
import { ContactsService } from "../../services/contacts/contacts.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Contact.name, schema: ContactSchema }]),
  ],
  controllers: [ContactsController],
  providers: [ContactsService],
})
export class ContactsModule {}
