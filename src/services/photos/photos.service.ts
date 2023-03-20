import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Photo, PhotoDocument } from "../../schemas/photo.schema";

@Injectable()
export class PhotosService {
  constructor(@InjectModel(Photo.name) private photoModel: Model<PhotoDocument>) {
  }
  async getAllPhotos(): Promise<Photo[]> {
    return this.photoModel.find();
  }
  async sendPhotos(data): Promise<Photo[]> {
    return this.photoModel.insertMany(data);
  }
  async deleteAllPhotos() {
    return this.photoModel.deleteMany();
  }
}
