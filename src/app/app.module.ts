import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttenteComponent } from './attente/attente.component';
import { PartieComponent } from './partie/partie.component';
import { TimerComponent } from './timer/timer.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { EndgameComponent } from './endgame/endgame.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AttenteComponent,
    PartieComponent,
    TimerComponent,
    EndgameComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    }),
    RouterModule.forRoot([
    {path: 'attente', component: AttenteComponent},
    {path: 'partie', component:PartieComponent},
    {path: 'endgame/:id', component:EndgameComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
