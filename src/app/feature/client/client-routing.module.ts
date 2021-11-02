import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientEditComponent } from './component/client-edit/client-edit.component';
import { ClientListComponent } from './component/client-list/client-list.component';
import { ClientComponent } from './component/client/client.component';

const routes: Routes = [
  { 
    path: '', 
    component:  ClientComponent,
    children: [
      // {path:'', redirectTo:'listar', pathMatch: 'full'},
      {
        path:'',
        component: ClientListComponent
      },
      {
        path:'crear',
        component: ClientEditComponent
      },
      {
        path:'editar',
        component: ClientEditComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
