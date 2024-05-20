import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/base.service";
import {MentalState} from "../model/mental-state";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MentalStateService extends BaseService<MentalState>{

  constructor(http : HttpClient) {
    super(http);
    this.resourceEndpoint= '/mental-state-exams';
  }
}
