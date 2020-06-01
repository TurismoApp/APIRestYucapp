import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './database/database.module';
import { activityController } from './controllers/activity.controller';
import { imageController } from './controllers/images.controller';
import { scheduleController } from './controllers/schedules.controller';
import { ubicationsController } from './controllers/ubications.controller';
import { inChargeController } from './controllers/inCharge.controller'
import { ActivityService } from './services/activity.service';
import { ImagesService } from './services/images.service';
import { ScheduleService } from './services/schedules.service';
import { UbicationsService } from './services/ubications.service';
import { inChargeService } from './services/inCharge.service';
import { placeService } from './services/place.service';
import { EstablishmentService } from './services/establishment.service';
import { placeController } from './controllers/place.controller';
import { establishmentController } from './controllers/establishment.controller';


@Module({
  imports: [
    TypeOrmModule,
    DatabaseModule
  ],
  controllers: [
    activityController,
    imageController,
    scheduleController,
    ubicationsController,
    inChargeController,
    placeController,
    establishmentController
  ],
  providers: [
    ActivityService,
    ImagesService,
    ScheduleService,
    UbicationsService,
    inChargeService,
    EstablishmentService,
    placeService

  ],
})

export class AppModule { }