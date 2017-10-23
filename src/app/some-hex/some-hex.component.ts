import {Component, OnInit} from '@angular/core';
import {WindowRef} from "../../core/services/window.ref";

@Component({
  selector: 'some-hex',
  templateUrl: './some-hex.component.html',
  styleUrls: ['./some-hex.component.scss']
})
export class SomeHexComponent implements OnInit {

  private arrayLength: number = 5;
  public thingArray = [];

  private window: Window;

  constructor(private windowRef: WindowRef) {
    this.window = this.windowRef.nativeWindow();

  }

  loadCallback($event){
    console.log($event);
    this.window.scrollTo(0, 2000);
  }

  ngOnInit() {
    for(let i = 0; i < this.arrayLength; i++){
      this.thingArray.push((i+1));
    }
    console.log(this.window);
    this.window.scrollTo(0, 2000);


  }

}
