import { Component, OnInit, OnDestroy, HostBinding, AfterViewInit, AfterViewChecked} from '@angular/core';
import { slideInDownAnimation } from '../animations';

@Component({
  selector: 'app-map2',
  templateUrl: './map2.component.html',
  styleUrls: ['./map2.component.css'],
  // animations: [slideInDownAnimation]
})
export class Map2Component implements OnInit, OnDestroy, AfterViewInit, AfterViewChecked {

//  @HostBinding('@routeAnimation') routeAnimation = true;
//   @HostBinding('style.display') display = 'block';


  constructor() { }

  ngOnInit() {
    const elements = document.querySelectorAll('#chartdiv');
    elements.forEach( el => console.log(`onInit in map2 target= ${el.getAttribute('target')}`));
  }

  ngOnDestroy() {
    
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

}
