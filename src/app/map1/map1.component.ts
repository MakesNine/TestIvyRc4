import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';
import { slideInDownAnimation } from '../animations';

@Component({
  selector: 'app-map1',
  templateUrl: './map1.component.html',
  styleUrls: ['./map1.component.css'],
  animations: [slideInDownAnimation]
})
export class Map1Component implements OnInit, OnDestroy {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';

  private options: any;
  private chart: AmChart;

  constructor(private AmCharts: AmChartsService) { }

  ngOnInit() {
    this.createChart();
  }

  ngOnDestroy() {
    this.AmCharts.destroyChart(this.chart);
  }

  private createChart() {
    // Initiaze options
    this.options = {
      type: 'map',
      theme: 'light',
      titles: [],
      dataProvider: {
        mapVar: AmCharts.maps.worldLow,
        images: []
      },

      areasSettings: {
        unlistedAreasColor: '#000000',
        unlistedAreasAlpha: 0.1,
        autoZoom: 'true'
      },

      imagesSettings: {
        balloonText:
          '<span style="font-size:14px;"><b>[[title]]</b>: [[value]]  </span>'
      },

      listeners: [],

      smallMap: {},

      zoomDuration: 2,

      export: {
        enabled: false,
      },
      pathToImages: 'assets/images/',
    };
    this.chart = this.AmCharts.makeChart('chartdiv', this.options);

  }

}