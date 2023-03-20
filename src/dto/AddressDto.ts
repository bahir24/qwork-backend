import { IGeo } from "../interfaces/contact";
import { ContactDto } from "./ContactDto";
import { City } from "../schemas/city.schema";

export class AddressDto implements Omit<ContactDto, "city"> {
  email: string;
  address: string;
  phone: string;
  geo: IGeo;
  city: City;
}
