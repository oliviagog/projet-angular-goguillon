import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {Chocolat} from '../../models/chocolat';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class ChocolatService {

  endpoint: string = environment.chocolatEndPoint;


  constructor(private _httpClient: HttpClient) {

  }

  get(): Observable<Chocolat[]> {
    return this._httpClient.get<Chocolat[]>(this.endpoint);
  }

  deleteOne(id): Observable<Chocolat>{
    return this._httpClient.delete<Chocolat>(this.endpoint+"/"+id)
  }

}
