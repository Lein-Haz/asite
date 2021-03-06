import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {EnterLeaveAnimation} from "../../../core/animations/enter-leave.animation";
import {ScreenTileData} from "../../../core/models/IScreenTileData.model";
import {NgClass} from "@angular/common";

@Component({
  selector: "screen-tile",
  templateUrl: './screen-tile.component.html',
  styleUrls: ['./screen-tile.component.scss'],
  host: {'[@enterLeave]':''},
  animations: EnterLeaveAnimation.animation
})

export class ScreenTileComponent implements OnInit{

  @Input()
  title: string;

  @Input() data: ScreenTileData;

  @Output() tileClick: EventEmitter<ScreenTileData> = new EventEmitter();
  @Output() tileConfigClick: EventEmitter<ScreenTileData> = new EventEmitter();

  constructor(
  ){}

  tileClickHandler(){
    this.tileClick.emit(this.data);
  }

  tileConfigClickHandler(){
    this.tileConfigClick.emit(this.data);
  }

  ngOnInit(): void {

  }
}
