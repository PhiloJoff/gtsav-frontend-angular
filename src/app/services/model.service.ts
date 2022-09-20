import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ModelModel } from '../models/model.model';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  private apiUrl: string = environment.host+"/model"

  constructor(private http: HttpClient) {  }
  
  public getAllModels(): Observable<Array<ModelModel>> {
    return this.http.get<Array<ModelModel>>(`${this.apiUrl}/models`);
  }

  public getAllModelsByName(name: string): Observable<Array<ModelModel>> {
    return this.http.get<Array<ModelModel>>(`${this.apiUrl}/models/search?name=${name}`);
  }
  
  public deleteModel(id: string | undefined): Observable<any> {
    return this.http.delete(`${this.apiUrl}/models/${id}`);
  }

  public addModel(model: ModelModel): Observable<ModelModel> {
    return this.http.post<ModelModel>(`${this.apiUrl}/models/add`,model);
  }
}
