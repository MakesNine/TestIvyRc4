import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Map1RoutingModule } from './map1-routing.module';
import { Map1Component } from './map1.component';
import { AmChartsModule } from '@amcharts/amcharts3-angular';


@NgModule({
  declarations: [Map1Component],
  imports: [
    CommonModule,
    Map1RoutingModule,
    AmChartsModule
  ]
})
export class Map1Module { }
