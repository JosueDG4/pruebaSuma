import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SumaComponent } from './task/suma/suma.component';

import { HttpClientModule } from '@angular/common/http';
import { SumaService } from './service/suma.service';

@NgModule({
  declarations: [
    AppComponent,
    SumaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SumaService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
