import { ICity, IGeo } from "../interfaces/contact";
import { CityDto } from "./CityDto";
import { City } from "../schemas/city.schema";

export class ContactDto {
  address: string;
  email: string;
  geo: IGeo;
  phone: string;
  city: City;
}
