import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { SupplierModel } from 'src/app/models/supplier.model';
import { ModelService } from 'src/app/services/model.service';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-new-model',
  templateUrl: './new-model.component.html',
  styleUrls: ['./new-model.component.css']
})
export class NewModelComponent implements OnInit {
  public suppliers: Observable<Array<SupplierModel>> | undefined;
  public newModelFormGroup: FormGroup | undefined;


  constructor(private modelService: ModelService, private supplierService: SupplierService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.suppliers = this.supplierService.getAllSuppliers().pipe(
    {
      next: () => {
        this.newModelFormGroup = this.formBuilder.group({
          name: this.formBuilder.control(""),
          supplier: SupplierModel
        });
      },
      error: (err) => {
        console.log("erreur chargement des suppliers")
      }
    });
  }

}
