import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../enviroment/environment";
import {Observable} from "rxjs";
import {GasList} from "../model/gasList";

@Injectable({
  providedIn: 'root'
})
export class GasPriceServiceService {

  constructor(private httpClient: HttpClient) {
  }

  public getAllRequests():any{
    return this.httpClient.get<GasList[]>(`${environment.apiUrl}api/test/all`);
  }
}
