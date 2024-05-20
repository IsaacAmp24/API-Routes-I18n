import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/base.service";
import {Examiners} from "../model/examiners";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ExaminersService extends BaseService<Examiners> {

  constructor(http : HttpClient) {
    super(http);
    this.resourceEndpoint= '/examiners';
  }
}
