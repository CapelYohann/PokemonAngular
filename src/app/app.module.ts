import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BattleComponent } from './battle/battle.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatGridListModule} from '@angular/material/grid-list';
import { LoggerComponent } from './logger/logger.component';
import { PkmnFightComponent } from './battle/pkmn-fight/pkmn-fight.component';
import { HighlightDirective } from './logger/directive/highlight.directive';

import {NgxAutoScrollModule} from "ngx-auto-scroll";

@NgModule({
  declarations: [
    AppComponent,
    BattleComponent,
    LoggerComponent,
    PkmnFightComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    NgxAutoScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
