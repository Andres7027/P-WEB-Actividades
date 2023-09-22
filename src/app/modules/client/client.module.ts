import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from '../client/client.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClientComponent,
    CreateComponent,
    UpdateComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule
  ]
})
export class ClientModule { }
