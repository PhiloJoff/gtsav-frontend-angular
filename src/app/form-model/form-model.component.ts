import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SupplierService} from "../services/supplier.service";
import {SupplierModel} from "../models/supplier.model";
import { Observable } from 'rxjs';
import { ModelService } from '../services/model.service';
import { ModelModel } from '../models/model.model';
import { Router } from '@angular/router';

@Component({
  selector: 'form-model',
  templateUrl: './form-model.component.html',
  styleUrls: ['./form-model.component.css']
})
export class FormModelComponent implements OnInit {
  public formModel: FormGroup | undefined;
  public supplierList: Observable<Array<SupplierModel>> | undefined;

  constructor(
    private formBuilder: FormBuilder, 
    private modelService: ModelService,
    private supplierService: SupplierService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.supplierList  = this.supplierService.getAllSuppliers();
    this.formModel = this.formBuilder.group({
      name: this.formBuilder.control("", [Validators.required, Validators.minLength(3)]),
      supplier: this.formBuilder.control(null, [Validators.required])
    });
  }

  onSubmit() {
    const model: ModelModel = {
      id: undefined,
      name:this.formModel?.controls['name'].value,
      supplier: this.formModel?.controls['supplier'].value
    }
    this.modelService.addModel(model).subscribe({
      next: (savedModel) => {
        console.log("Ajout du model réussi : ", savedModel);
        this.router.navigateByUrl('/models');
      },
      error: (err) => {
        console.error("Erreur lors de l'ajout : ", err);
        this.formModel?.reset();
      }
    });
  }
}
