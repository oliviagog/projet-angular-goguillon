import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from './shared/components/accueil/accueil.component'
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import {ChocolatComponent} from './chocolat/chocolat.component';
import {FabricationComponent} from './fabrication/fabrication.component'
import { ChocolatListComponent } from './chocolat/pages/chocolat-list/chocolat-list.component';
const routes: Routes = [
{
  path:'',
  component:AccueilComponent,
},
{
  path:'chocolat',
  loadChildren:() => import('./chocolat/chocolat.module').then(m=>m.ChocolatModule)
},
{
  path:'fabrication',
  loadChildren:() => import('./fabrication/fabrication.module').then(m=>m.FabricationModule)
},
{
  path:'**',
  component: NotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
