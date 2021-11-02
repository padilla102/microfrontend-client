import { NgModule } from '@angular/core';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './component/client/client.component';
import { ClientListComponent } from './component/client-list/client-list.component';
import { ClientEditComponent } from './component/client-edit/client-edit.component';
import { ClientService } from './shared/services/client.service';
import { SharedModule } from '@shared/shared.module';
import { CoreModule } from '@core/core.module';


@NgModule({
  declarations: [
    ClientComponent,
    ClientListComponent,
    ClientEditComponent
  ],
  imports: [
    CoreModule,
    SharedModule,
    ClientRoutingModule
  ],
  providers:[
    ClientService
  ]
})
export class ClientModule { }
