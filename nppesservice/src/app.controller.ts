import { Controller } from '@nestjs/common';
import {MessagePattern, Payload} from "@nestjs/microservices";
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: "NPPES" })
  ping(_: any, @Payload() payload: any) {
    return this.appService.getInfo(payload.cities)
  }
}
