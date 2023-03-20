import { IService } from "./service";

export interface ICategory {
  _id?: string;
  title: string,
  desc: string,
  icon: string,
}

export interface ICategoryWithServices {
  title: string,
  desc: string,
  icon: string,
  services: IService[]
}
