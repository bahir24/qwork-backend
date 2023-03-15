import { Module } from '@nestjs/common';
import { PhotosController } from './photos/photos.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { Photo, PhotoSchema } from "../../schemas/photo.schema";
import { PhotosService } from "../../services/photos/photos.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Photo.name, schema: PhotoSchema }]),
  ],
  controllers: [PhotosController],
  providers: [PhotosService],
})
export class PhotosModule {}
