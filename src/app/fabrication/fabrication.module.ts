import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FabricationRoutingModule } from './fabrication-routing.module';
import { FabricationComponent } from './fabrication.component';
import { FabricationListComponent } from './pages/fabrication-list/fabrication-list.component';
import { FabricationFormComponent } from './pages/fabrication-form/fabrication-form.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    FabricationComponent,
    FabricationListComponent,
    FabricationFormComponent
  ],
  imports: [
    CommonModule,
    FabricationRoutingModule,
    SharedModule,
  ]
})
export class FabricationModule { }
