import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChocolatRoutingModule } from './chocolat-routing.module';
import { ChocolatComponent } from './chocolat.component';
import { ChocolatFormComponent } from './pages/chocolat-form/chocolat-form.component';
import { ChocolatListComponent } from './pages/chocolat-list/chocolat-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ChocolatComponent,
    ChocolatFormComponent,
    ChocolatListComponent
  ],
  imports: [
    CommonModule,
    ChocolatRoutingModule,
    SharedModule
  ]
})
export class ChocolatModule { }
