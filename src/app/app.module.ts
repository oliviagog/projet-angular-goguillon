import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {CoreModule} from './core/core.module';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

import { FabricationModule } from './fabrication/fabrication.module';



@NgModule({
  declarations: [
    AppComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
  
    
    
  ],
  
  providers: [],
  exports:[
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
