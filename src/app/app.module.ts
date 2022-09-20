import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListSupplierComponent } from './components/list-suppliers/list-suppliers.component';
import { ListModelsComponent } from './components/list-models/list-models.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormModelComponent } from './form-model/form-model.component';
import {NewModelComponent} from "./components/new-model/new-model.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListSupplierComponent,
    ListModelsComponent,
    FormModelComponent,
    NewModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
