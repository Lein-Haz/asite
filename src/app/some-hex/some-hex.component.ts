import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'some-hex',
  templateUrl: './some-hex.component.html',
  //styleUrls: ['./some-hex.component.scss']
})
export class SomeHexComponent implements OnInit {

  private arrayLength: number = 5;
  public thingArray = [];

  constructor() {

  }

  ngOnInit() {
    for(let i = 0; i < this.arrayLength; i++){
      this.thingArray.push((i+1));
    }

  }

}
