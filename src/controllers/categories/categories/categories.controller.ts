import { Body, Controller, Delete, Get, Post } from "@nestjs/common";
import { CategoriesService } from "../../../services/categories/categories.service";
import { Category } from "../../../schemas/category.schema";
import { CategoryWithServicesDto } from "../../../dto/CategoryDto";
import { Service } from "../../../schemas/service.schema";
import { ServicesService } from "../../../services/services/services.service";
import { ObjectId } from "mongoose";
import { InsertManyResult } from "mongodb";

@Controller("categories")
export class CategoriesController {
  constructor(
    private categoriesService: CategoriesService,
    private servicesService: ServicesService
  ) {
  }

  @Get()
  getAllCategories(): Promise<Category[]> {
    console.log("get categories");
    return this.categoriesService.getAllCategories();
  }

  @Get("services")
  getCategoriesWithServices(): Promise<Category[]> {
    return this.categoriesService.getGroupedByCategoriesServices();
  }

  @Post()
  sendCategories(@Body() categories: CategoryWithServicesDto[]): Promise<Category[]> {
    return Promise.all(categories.map((category: CategoryWithServicesDto): Promise<Category> => {
      return this.servicesService.sendServices(category.services)
        .then((servicesSaveResult: InsertManyResult<Service>): Promise<Category> => {
          return this.categoriesService.sendCategory({
            title: category.title,
            icon: category.icon,
            desc: category.desc,
            services: Object.values(servicesSaveResult.insertedIds).map((id: ObjectId) => id.toString())
          });
        });
    }));
  }

  @Delete()
  deleteAllCategories(): void {
    this.categoriesService.deleteAllCategories();
  }
}


// const newCategory: CategoryDto = {
//   title: category.title,
//   icon: category.icon,
// Object.values(servicesSaveResult.insertedIds).map((id: ObjectId) => console.log(id.toString()));
//   desc: category.desc,
//   services: objectIds
// };
// this.servicesService.sendServices(category.services)
//   .then((servicesSaveResult: InsertManyResult<Service>) =>
//     newCategory.services.pus
// category).then()
// }

// const serviceIds = this.servicesService.sendServices(category.services).then();

// const newCategory = (new Category()).services = serviceIds;

// (servicesSaveResult: InsertManyResult<Service>) => {
// let category: CategoryDto = category
// .services.push(Object.values(servicesSaveResult.insertedIds))
// category.services.push(Object.values(servicesSaveResult.insertedIds));
// console.log(servicesSaveResult.insertedIds);
//   console.log(Object.values(servicesSaveResult.insertedIds));
// })


// services.
// this.servicesService.sendServices(category.services);
// category.services.push(services.insertedIds);
// return this.categoriesService.sendCategory(category).then();

// @Post()
// sendCategories(@Body() data: CategoryDto[]): Promise<Category[]> {
//   return this.categoriesService.sendCategories(data);
// }

// .then((services: InsertManyResult) => 
//   {
//   console.log(services.insertedIds);
//   // services.
//  
//     // category.services.push(services.insertedIds);
//     return this.categoriesService.sendCategory(category).then();
//   }
// )));


// {
// category.services.push(...services);
// return this.categoriesService.sendCategory(category);
// }
// ));
// @Get('services')
// getAllCategoriesWithServices(): Promise<Category[]> {
//   console.log('get grouped services');
//   return this.categoriesService.getGroupedByCategoriesServices();
// }
// return this.categoriesService.sendCategories(data);


// return this.servicesService.sendServices(item.services).then(services =>
//
//   this.categoriesService.sendService()
// )
