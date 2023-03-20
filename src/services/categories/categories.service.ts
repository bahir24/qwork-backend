import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Category, CategoryDocument } from "../../schemas/category.schema";
import { Service, ServiceDocument } from "../../schemas/service.schema";
import { ICategoryWithServices } from "../../interfaces/category";

@Injectable()
export class CategoriesService {
  constructor(@InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
              @InjectModel(Service.name) private serviceModel: Model<ServiceDocument>
  ) {
  }

  async getAllCategories(): Promise<Category[]> {
    return this.categoryModel.find();
  }

  async sendCategories(data): Promise<Category[]> {

    return this.categoryModel.insertMany(data);
  }

  async sendCategory(category): Promise<Category> {
    return this.categoryModel.create(category).then();
  }

  async getGroupedByCategoriesServices(): Promise<Category[]> {
    return this.categoryModel.find().populate("services");
  }

}

// this.categoryModel.find().exec((err, cat) => {
//   // let group = this.getGroups(cat)
// });

// console.log(model);


// return this.categoryModel(category).save();
// return this.categoryModel.

// return this.categoryModel.
// return this.categoryModel.castObject(category)
//   .save().then(category => category.populate('services'))
// return this.categoryModel.create(category).then((category: Category) => {return this.categoryModel});

// create(category).then((category: Category) => {return this.categoryModel});
// .then((category: Category) => {
//  
//   // category.
//   return category;
//
// });
// async sendContact(contact: AddressDto):Promise<Contact> {
//   return this.contactModel.create(contact).then(contact => contact.populate('city'));
// }
//
// async getGroups(cats): Promise<ICategoryWithServices[]>{
//   return cats.exec().map((category: ICategory) => {
//     this.serviceModel.find({ category: category._id })
//       .exec((err, services: Service[]) => {
//         return{
//           title: category.title,
//           icon: category.icon,
//           services: services
//         }; 
//         }
//       );
//   });
//  
// }

// async getGroupedByCategoriesServices(): Promise<ICategoryWithServices[]> {
//   this.categoryModel.find().exec((err, cat) => {
//     let group = this.getGroups(cat)
//   });
// let cats = 

// this.categoryModel.find().then((categories: Category[]) => {
//   categories.map((category: Category) => {
//    
//     console.log(category);
//   })
//     // console.log(categories);
//     return categories;
//   }
// );

// let consslk = this.categoryModel.find();
//
// // consslk.
//
// this.categoryModel.find()
//   .then((categories: Category[]) =>{
//     categories.map((category: ICategory) => {
//       this.serviceModel.find({ category: category._id })
//         .then((services: Service[]) => {
//           group.push({
//             title: category.title,
//             icon: category.icon,
//             services: services
//           });    
//           }
//         );
//     });
//     console.log(group);
//   });

// return group;


// console.log('cat ', cat);

// console.log('group ', group);
// return cat;
// group.push({
//   title: category.title,
//   icon: category.icon,
//   services: this.serviceModel.find({ category: category._id })
// });
// console.log('group ', group);


// {
//   
// }

// (categories: Category[]) => {
//     categories.map((category: Category) => {
//
//       console.log(category);
//     })
//     // console.log(categories);
//     return categories;
//   }
// );

// }
