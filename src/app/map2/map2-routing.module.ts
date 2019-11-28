import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Map2Component } from './map2.component';

const routes: Routes = [{ path: '', component: Map2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Map2RoutingModule { }
