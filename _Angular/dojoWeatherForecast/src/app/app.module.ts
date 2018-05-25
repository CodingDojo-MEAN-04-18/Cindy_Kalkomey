import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';
import { HomeComponent } from './home/home.component';

import { HttpModule } from '@angular/http';

import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
