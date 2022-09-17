import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SupplierModel } from '../models/supplier.model';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  private urlApi: string = environment.host+"/supplier";
  constructor(private http: HttpClient) { }

  public getAllSuppliers(): Observable<Array<SupplierModel>> {
    return this.http.get<Array<SupplierModel>>(`${this.urlApi}/suppliers`);
  }

  // public getSupplierById(id: string): Observable<SupplierModel> {
  //   return this.http.get(`${this.urlApi}/suppliers/${id}`);
  // }

  // public addSupplier(id: string): Observable<SupplierModel> {
  //   return this.http.get(`${this.urlApi}/suppliers/${id}`);
  // }
}
