import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Chocolat} from '../../models/chocolat';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class ChocolatService {

  endpoint: string = environment.EndPoint;


  constructor(private _httpClient: HttpClient) {

  }

  get(): Observable<Chocolat[]> {
    return this._httpClient.get<Chocolat[]>(this.endpoint+"chocolat");
  }

  deleteOne(id): Observable<Chocolat>{
    return this._httpClient.delete<Chocolat>(this.endpoint+"chocolat/"+id)
  }

  post(chocolat: Chocolat): Observable<Chocolat> {
    return this._httpClient.post<Chocolat>(this.endpoint +"chocolat/", chocolat);

  }

}
