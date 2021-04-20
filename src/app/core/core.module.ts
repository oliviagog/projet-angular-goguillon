import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { ChocolatService } from './services/http/chocolat.service';
import { FabricationService } from './services/http/fabrication.service';
@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    HttpClientModule,
    MatIconModule,
  ],
  exports:[
    HeaderComponent,
  

    
  ],
  providers:[
    ChocolatService,
    FabricationService
  ]
})
export class CoreModule { }
