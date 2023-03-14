import { Module } from "@nestjs/common";
import { StrengthsModule } from "./controllers/strengths/strengths.module";
import { CategoriesModule } from "./controllers/categories/categories.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [StrengthsModule, CategoriesModule, MongooseModule.forRoot('mongodb://localhost/avalon')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
