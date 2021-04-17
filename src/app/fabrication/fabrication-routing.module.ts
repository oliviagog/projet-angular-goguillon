import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';
import { FabricationComponent } from './fabrication.component';
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
        path:'**',
        component:NotFoundComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FabricationRoutingModule { }
