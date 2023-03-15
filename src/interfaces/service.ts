import { Schema } from "mongoose";


export interface IService {
  title: string,
  subTitle: string,
  category: Schema.Types.ObjectId,
  data: IServiceData[],
  img: string,
  thumb: string,
  desc: string
}

export interface IServiceData {
  key: string,
  value: string
}

export interface IServicesGrouped {
  home: IService[],
  street: IService[],
  area: IService[]
}
