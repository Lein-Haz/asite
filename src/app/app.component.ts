import { Component } from '@angular/core';
import {ConstantService} from "../core/services/constant.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private FLEX_LAYOUT = ConstantService.FLEX_LAYOUT;

  title = 'app';

  constructor(){
    console.log(this.FLEX_LAYOUT);
  }
}
