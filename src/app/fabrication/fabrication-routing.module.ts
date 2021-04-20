import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';
import { FabricationComponent } from './fabrication.component';
import { FabricationFormComponent } from './pages/fabrication-form/fabrication-form.component';
import { FabricationListComponent } from './pages/fabrication-list/fabrication-list.component';

const routes: Routes = [
  {
    path:'',
    component:FabricationComponent,
    children:[
      {
        path:'',
        component: FabricationListComponent,
      },
      {
        path:'fabrication-form',
        component: FabricationFormComponent,
      },
    ]
  },
  {
    path:'**',
    component:NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FabricationRoutingModule { }
