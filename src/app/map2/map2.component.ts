import { Component, OnInit, OnDestroy, HostBinding, AfterViewInit, AfterViewChecked, ViewChild, ElementRef} from '@angular/core';
import { AmChartsService, AmChart } from '@amcharts/amcharts3-angular';
import { slideInDownAnimation } from '../animations';

@Component({
  selector: 'app-map2',
  templateUrl: './map2.component.html',
  styleUrls: ['./map2.component.css'],
  animations: [slideInDownAnimation]
})
export class Map2Component implements OnInit, OnDestroy, AfterViewInit, AfterViewChecked {

 @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';

  @ViewChild('chartdiv', {static: true, read: ElementRef}) chartdiv: ElementRef;

  private options: any;
  private chart: AmChart;

  constructor(private AmCharts: AmChartsService) { }

  ngOnInit() {
    this.createChart();
  }

  ngOnDestroy() {
    this.AmCharts.destroyChart(this.chart);
  }

  ngAfterViewInit() {
    const elements = document.querySelectorAll('#chartdiv');
    elements.forEach( el => console.log(`AfterViewInit in map2 target= ${el.getAttribute('target')}`));
  }

  ngAfterViewChecked() {
    const elements = document.querySelectorAll('#chartdiv');
    elements.forEach( el => console.log(`AfterViewChecked in map2 target= ${el.getAttribute('target')}`));
  }

  public logMapsDiv() {
    const elements = document.querySelectorAll('#chartdiv');
    elements.forEach( el => console.log(`LogMapsDiv in map2 target= ${el.getAttribute('target')}`));
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
    const elements = document.querySelectorAll('#chartdiv');
    elements.forEach( el => console.log(`onInit in map2 target= ${el.getAttribute('target')}`));

    console.log(`OnInit in Map2: @ViewChild nativeElement target = ${this.chartdiv.nativeElement.getAttribute('target')}`);

    // this.chart = this.AmCharts.makeChart('chartdiv', this.options);
    this.chart = this.AmCharts.makeChart(this.chartdiv.nativeElement, this.options);

  }

}
