import { NgModule } from '@angular/core';
import { Chart1Component } from './chart1.component';

import { AmChartsModule } from '@amcharts/amcharts3-angular';

@NgModule({
  declarations: [Chart1Component],
  imports: [
    AmChartsModule
  ],
  exports: [Chart1Component]
})
export class Chart1Module { }
