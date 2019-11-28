import { Component, OnInit, OnDestroy } from '@angular/core';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';

@Component({
  selector: 'lib-chart1',
  template: `
    <div id="chartdiv" class="map"></div>
  `,
  styleUrls: ['./chart1.component.css']
})
export class Chart1Component implements OnInit, OnDestroy {
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

