import { Component, OnInit, OnDestroy, AfterViewInit, HostBinding, AfterViewChecked } from '@angular/core';
import { slideInDownAnimation } from '../animations';

@Component({
  selector: 'app-map1',
  templateUrl: './map1.component.html',
  styleUrls: ['./map1.component.css'],
 // animations: [slideInDownAnimation]
})
export class Map1Component implements OnInit, OnDestroy, AfterViewInit, AfterViewChecked {
  // @HostBinding('@routeAnimation') routeAnimation = true;
  // @HostBinding('style.display') display = 'block';

  constructor() { }

  ngOnInit() {
    const elements = document.querySelectorAll('#chartdiv');
    elements.forEach( el => console.log(`onInit in map1 target= ${el.getAttribute('target')}`));
  }

  ngOnDestroy() {
    
  }

  ngAfterViewInit() {
    const elements = document.querySelectorAll('#chartdiv');
    elements.forEach( el => console.log(`AfterViewInit in map1 target= ${el.getAttribute('target')}`));
  }

  ngAfterViewChecked() {
    const elements = document.querySelectorAll('#chartdiv');
    elements.forEach( el => console.log(`AfterViewChecked in map1 target= ${el.getAttribute('target')}`));
  }

  public logMapsDiv() {
    const elements = document.querySelectorAll('#chartdiv');
    elements.forEach( el => console.log(`LogMapsDiv in map1 target= ${el.getAttribute('target')}`));
  }

 
}
