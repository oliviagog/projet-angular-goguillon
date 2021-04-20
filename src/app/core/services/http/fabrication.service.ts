import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Fabrication } from '../../models/fabrication';

@Injectable()
export class FabricationService {
  endpoint: string = environment.EndPoint;


  constructor(private _httpClient: HttpClient) {

  }

  get(): Observable<Fabrication[]> {
    return this._httpClient.get<Fabrication[]>(this.endpoint+"fabrication");
  }

  deleteOne(id): Observable<Fabrication>{
    return this._httpClient.delete<Fabrication>(this.endpoint+"fabrication/"+id)
  }

  post(fabrication: Fabrication): Observable<Fabrication> {
    return this._httpClient.post<Fabrication>(this.endpoint +"fabrication/", fabrication);

  }
}
