import { Module } from "@nestjs/common";
import { StrengthsModule } from "./controllers/strengths/strengths.module";
import { CategoriesModule } from "./controllers/categories/categories.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";
import { EmployeesModule } from './controllers/employees/employees.module';
import { ContactsModule } from './controllers/contacts/contacts.module';
import { ServicesModule } from './controllers/services/services.module';
import { PhotosModule } from './controllers/photos/photos.module';

@Module({
  imports: [StrengthsModule, CategoriesModule, EmployeesModule, ContactsModule, ServicesModule, PhotosModule, MongooseModule.forRoot('mongodb://localhost/avalon')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
