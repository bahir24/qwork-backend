import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Strength, StrengthSchema } from "../../schemas/strength.schema";
import { StrengthsController } from "./strengths/strengths.controller";
import { StrengthsService } from "../../services/strengths/strengths.service";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Strength.name, schema: StrengthSchema }]),
  ],
  controllers: [StrengthsController],
  providers: [StrengthsService],
})
export class StrengthsModule {}
