import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OauthreturnRoutingModule } from './oauthreturn-routing.module';
import { OauthreturnComponent } from './oauthreturn.component';

@NgModule({
  imports: [
    CommonModule,
    OauthreturnRoutingModule
  ],
  declarations: [OauthreturnComponent]
})
export class OauthreturnModule { }
