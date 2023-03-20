import { Body, Controller, Delete, Get, Post } from "@nestjs/common";
import { PhotosService } from "../../../services/photos/photos.service";
import { PhotoDto } from "../../../dto/PhotoDto";
import { Photo } from "../../../schemas/photo.schema";

@Controller('photos')
export class PhotosController {
  constructor(private photosService: PhotosService) {}

  @Get()
  getAllServices(): Promise<Photo[]> {
    return this.photosService.getAllPhotos();
  }

  @Post()
  sendServices(@Body() data: PhotoDto[]): Promise<Photo[]> {
    return this.photosService.sendPhotos(data);
  }
  @Delete()
  deleteAllPhotos(): void {
    this.photosService.deleteAllPhotos();
  }
}
