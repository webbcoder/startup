import {Inject, Injectable} from '@nestjs/common';
import { ClientProxy } from "@nestjs/microservices";
import { map } from "rxjs/operators";
import {PAYLOAD} from './constants/payload'

@Injectable()
export class AppService {
  constructor(
      @Inject("NPPES") private readonly clientServiceA: ClientProxy
  ) {}

  getNppesData() {
    const pattern = { cmd: "NPPES" };
    const payload = {cities: PAYLOAD.cities};
    return this.clientServiceA
        .send<string>(pattern, payload)
        // .pipe(
        //     map((message: string) => ({ message }))
        // );
  }
}
