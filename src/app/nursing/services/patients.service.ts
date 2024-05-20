import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/base.service";
import {Patients} from "../model/patients";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PatientsService extends BaseService<Patients>{

  constructor(http : HttpClient) {
    super(http);
    this.resourceEndpoint= '/patients';
  }
}
