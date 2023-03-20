import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ContactsService } from "../../../services/contacts/contacts.service";
import { Contact } from "../../../schemas/contact.schema";
import { CitiesService } from "../../../services/cities/cities.service";
import { ContactDto } from "../../../dto/ContactDto";
import { City } from "../../../schemas/city.schema";

@Controller("contacts")
export class ContactsController {

  constructor(
    private contactsService: ContactsService,
    private citiesService: CitiesService
  ) {
  }

  @Get()
  getAllContacts(): Promise<Contact[]> {
    return this.contactsService.getAllContacts();
  }

  @Get("city/:city_id")
  getContactByCityId(@Param("city_id") cityId): Promise<Contact> {
    return this.contactsService.getContactByCityId(cityId);
  }

  @Get("cities")
  getCities(): Promise<City[]> {
    return this.citiesService.getAllCities();
  }

  @Post()
  sendContacts(@Body() contactsWithCities: ContactDto[]): Promise<Contact>[] {
    return contactsWithCities.map((contactWithCity: ContactDto) =>
      this.citiesService.sendCity(contactWithCity.city)
        .then((city: City) =>
        this.contactsService.sendContact({
          email: contactWithCity.email,
          address: contactWithCity.address,
          phone: contactWithCity.phone,
          geo: contactWithCity.geo,
          city: city
        })
      )
    );
  }
}
