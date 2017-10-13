import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AppMaterialModule} from "../shared/app-material/app-material.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {SomeHexComponent} from "./some-hex.component";
import {SomeHexRoutingModule} from "./some-hex-routing.module";


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    AppMaterialModule,
    SomeHexRoutingModule
  ],
  declarations: [
    SomeHexComponent
  ]
})
export class SomeHexModule { }
