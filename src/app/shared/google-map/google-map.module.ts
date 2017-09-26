import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoogleMapComponent } from './google-map.component';
import {AppMaterialModule} from "../../app-material/app-material.module";


@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports:[
    GoogleMapComponent
  ],
  declarations: [
    GoogleMapComponent
  ]
})
export class GoogleMapModule { }
