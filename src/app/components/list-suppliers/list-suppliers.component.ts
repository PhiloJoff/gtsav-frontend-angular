import { Component, OnInit } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { SupplierModel } from '../../models/supplier.model';
import { SupplierService } from '../../services/supplier.service';

@Component({
  selector: 'app-list-supplier',
  templateUrl: './list-suppliers.component.html',
  styleUrls: ['./list-suppliers.component.css']
})

export class ListSupplierComponent implements OnInit {

  suppliers$: Observable<Array<SupplierModel>> | undefined;
  errorMessage: string | undefined;
  constructor(private supplierService: SupplierService) { }

  ngOnInit(): void {
    this.suppliers$ = this.supplierService.getAllSuppliers().pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(() => err);
      })
    );
  }

}
