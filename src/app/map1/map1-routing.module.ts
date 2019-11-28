import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Map1Component } from './map1.component';

const routes: Routes = [{ path: '', component: Map1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Map1RoutingModule { }
