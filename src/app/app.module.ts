import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminViewComponent } from './components/admin-view/admin-view.component';
import { ClientViewComponent } from './components/client-view/client-view.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminViewComponent,
    ClientViewComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    MatButtonModule,MatListModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
