import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { ListModelsComponent } from './components/list-models/list-models.component';
import { ListSupplierComponent } from './components/list-suppliers/list-suppliers.component';

const routes: Routes = [
  { path : "models", component: ListModelsComponent },
  { path : "suppliers", component: ListSupplierComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
