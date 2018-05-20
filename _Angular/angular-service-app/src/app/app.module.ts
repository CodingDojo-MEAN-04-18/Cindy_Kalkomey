import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlphaComponent } from './alpha/alpha.component';
import { BetaComponent } from './beta/beta.component';

import { DataService } from './data.service';
import { DifferenceComponent } from './difference/difference.component';

@NgModule({
  declarations: [
    AppComponent,
    AlphaComponent,
    BetaComponent,
    DifferenceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
