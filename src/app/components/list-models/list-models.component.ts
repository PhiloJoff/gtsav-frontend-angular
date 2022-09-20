import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ModelModel } from 'src/app/models/model.model';
import { ModelService } from 'src/app/services/model.service';

@Component({
  selector: 'app-list-model',
  templateUrl: './list-models.component.html',
  styleUrls: ['./list-models.component.css']
})
export class ListModelsComponent implements OnInit {
  models$: Observable<Array<ModelModel>> | undefined;
  errorMessage: string | undefined;
  searchModelFormGroup: FormGroup | undefined;
  searchName: string = "";

  constructor(private modelService: ModelService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.searchModelFormGroup = this.formBuilder.group({
      name: this.formBuilder.control("")
    });

    this.models$ = this.modelService.getAllModelsByName(this.searchName).pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(() => {err})
      })
    );
  }

  public handleSearchModels():void {
    this.searchName=this.searchModelFormGroup?.value.name;
    this.models$ = this.modelService.getAllModelsByName(this.searchName).pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(() => {err})
      })
    );
  }

  public handleDeleteModel(model: ModelModel): void {
    console.log(model);
    this.modelService.deleteModel(model.id).subscribe( {
      next: () => {
        this.models$ = this.models$?.pipe(
          map(models => {
            const index = models.indexOf(model);
            models.slice(index, 1);
            return models
          })
        );
      },
      error: (err) => {
        console.log("erreur de suppresion : ", err);
      }
    });
  }
  
  public handleNewModel() {
    this.router.navigateByUrl("/new-model");
  }

}
