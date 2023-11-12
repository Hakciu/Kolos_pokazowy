import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonListComponent } from './person-list/person-list.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddPersonFormComponent } from './add-person-form/add-person-form.component';
import { DeletePersonFormComponent } from './delete-person-form/delete-person-form.component';
import { UpdatePersonFormComponent } from './update-person-form/update-person-form.component';

@NgModule({
  declarations: [AppComponent, PersonListComponent, AddPersonFormComponent, DeletePersonFormComponent, UpdatePersonFormComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
