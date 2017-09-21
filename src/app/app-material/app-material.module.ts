import { NgModule } from '@angular/core';

import {MdSidenavModule, MdListModule, MdButtonModule, MdToolbarModule} from "@angular/material";

@NgModule({
  declarations: [
  ],
  imports: [
    MdSidenavModule,
    MdListModule,
    MdButtonModule,
    MdToolbarModule
  ],
  exports: [
    MdSidenavModule,
    MdListModule,
    MdButtonModule,
    MdToolbarModule,

  ],
  providers: [],
  bootstrap: []
})
export class AppMaterialModule { }
