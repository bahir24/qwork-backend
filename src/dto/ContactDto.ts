import { Contact } from "../schemas/contact.schema";
import { ICity, IGeo } from "../interfaces/contact";

export class ContactDto implements Contact {
  email: string;
  address: string;
  city: ICity;
  phone: string;
  geo: IGeo;
}
