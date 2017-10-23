import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'hex-tile',
  templateUrl: './a-hex-tile.component.html',
  styleUrls: ['./a-hex-tile.component.scss']
})
export class AHexTileComponent implements OnInit {

  @Output() loadEmitter: EventEmitter<any> = new EventEmitter();


  constructor() {

  }

  loadCallbackEmitter($event){
    console.log($event);
    this.loadEmitter.emit($event);
  }

  ngOnInit() {


  }

}
