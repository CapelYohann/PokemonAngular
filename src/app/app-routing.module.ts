import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BattleComponent } from './battle/battle.component';
import { SelectorComponent } from './selector/selector.component';

const routes: Routes = [
  { path: '', component: SelectorComponent }, // path: '/'
  { path: 'selector',  component: SelectorComponent },
  { path: 'battle/:p1/:p2', component: BattleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
