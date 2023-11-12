import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonListComponent } from './person-list/person-list.component';
import { AddPersonFormComponent } from './add-person-form/add-person-form.component';
import { DeletePersonFormComponent } from './delete-person-form/delete-person-form.component';
import { UpdatePersonFormComponent } from './update-person-form/update-person-form.component';

const routes: Routes = [
  {
    path: '',
    component: PersonListComponent,
  },
  {
    path: 'add',
    component: AddPersonFormComponent,
  },
  {
    path: 'delete',
    component: DeletePersonFormComponent,
  },
  {
    path: 'update',
    component: UpdatePersonFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
