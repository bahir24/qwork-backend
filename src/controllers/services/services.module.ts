import { Module } from '@nestjs/common';
import { ServicesController } from './services/services.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { Service, ServiceSchema } from "../../schemas/service.schema";
import { ServicesService } from "../../services/services/services.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Service.name, schema: ServiceSchema }]),
  ],
  controllers: [ServicesController],
  providers: [ServicesService],
})
export class ServicesModule {}
