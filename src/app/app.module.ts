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

import { DecimalPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SelectorComponent } from './selector/selector.component';

import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './selector/dialog/dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    BattleComponent,
    LoggerComponent,
    PkmnFightComponent,
    HighlightDirective,
    SelectorComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    NgxAutoScrollModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
