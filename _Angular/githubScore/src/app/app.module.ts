import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';
import { FormControl, FormsModule } from '@angular/forms';


import { ScoreService } from './score.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ScoreService],
  bootstrap: [AppComponent]
})

export class AppModule { }
