import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StandingsComponent} from './components/standings/standings.component';
import {RouterModule} from '@angular/router';

const routes = [
  {path: '', component: StandingsComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
