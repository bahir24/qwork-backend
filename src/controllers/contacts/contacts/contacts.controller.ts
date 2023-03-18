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
    console.log('get categories');
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
  sendContacts(@Body() data: ContactDto[]): Promise<Contact>[] {
    return data.map(item =>
      this.citiesService.sendCity(item.city).then(city =>
        this.contactsService.sendContact({
          email: item.email,
          address: item.address,
          phone: item.phone,
          geo: item.geo,
          city: city
        })
      )
    );
  }
}
