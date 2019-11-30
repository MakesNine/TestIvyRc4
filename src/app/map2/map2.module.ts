import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Map2RoutingModule } from './map2-routing.module';
import { Map2Component } from './map2.component';


@NgModule({
  declarations: [Map2Component],
  imports: [
    CommonModule,
    Map2RoutingModule
  ]
})
export class Map2Module { }
