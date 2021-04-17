import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';
import { ChocolatComponent } from './chocolat.component';
import { ChocolatListComponent } from './pages/chocolat-list/chocolat-list.component';

const routes: Routes = [
  {
    path:'',
    component:ChocolatComponent,
    children:[
      {
        path:'',
        component: ChocolatListComponent,
      },
      {
        path:'**',
        component:NotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChocolatRoutingModule { }
