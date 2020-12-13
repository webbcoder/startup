import { Injectable, HttpService } from '@nestjs/common';
import {map} from "rxjs/operators";

@Injectable()
export class AppService {
  url: string;
  constructor(private readonly httpService: HttpService) {
    this.url = 'https://npiregistry.cms.hhs.gov/api/?version=2.1&city=';
  }
  async getInfo(cities: string[]): Promise<any> {
    return Promise.all(cities.map(city => {
      return this.httpService.request({
        method: "GET",
        url: `${this.url}${city}`,
        timeout: 10000
      }).pipe(map(res => {
        return res.data;
      })).toPromise()
    }));
  }
}
