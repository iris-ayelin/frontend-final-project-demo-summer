import { Routes } from '@angular/router';
import { PersonsListComponent } from './persons-list/persons-list.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { AppLoadingComponent } from './loading/loading.component';
import { LoadingUpdateFormComponent } from './loading-update-form/loading-update-form.component';

export const routes: Routes = [
    {path: '', component: PersonsListComponent},
    {path: 'person/:id', component : PersonFormComponent},
    {path: 'newperson', component : PersonFormComponent},
    {path: 'loading', component : AppLoadingComponent},
    {path: 'loading-update-form', component : LoadingUpdateFormComponent}
];
